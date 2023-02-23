import path from 'path'
import { readdirSync } from 'fs'
import { Inject, Injectable, Optional } from '@nestjs/common'

@Injectable()
export class DbService {
  constructor(@Inject('config') config: { path: string }, @Optional() private options = {}) {
    console.warn(config, 111)
    const _path = path.resolve(__dirname, '../config/')
    readdirSync(_path).map(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(_path, file))
        if (module.default)
          this.options = { ...this.options, ...module.default() }
      }
    })
  }

  getDbConfig(path?: string) {
    return path
      ? path.split('.').reduce((config, name) => {
        return config[name]
      }, this.options)
      : this.options
  }

  public connect() {
    return 'success'
  }
}
