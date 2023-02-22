import path from 'path'
import { readdirSync } from 'fs'
import { Injectable, Optional } from '@nestjs/common'

@Injectable()
export class DbService {
  dbConfig = {}
  constructor(private readonly config: Record<string, any>, @Optional() private options = {}) {
    const _path = path.resolve(__dirname, '../config/')
    readdirSync(_path).map(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(_path, file))
        if (module.default)
          this.dbConfig = { ...this.dbConfig, ...module.default() }
      }
    })
  }

  getDbConfig(path?: string) {
    return path
      ? path.split('.').reduce((config, name) => {
        return config[name]
      }, this.dbConfig)
      : this.dbConfig
  }

  public connect() {
    return `success,url:${this.config.url}`
  }
}
