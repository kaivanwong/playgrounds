import path from 'path'
import { readdirSync } from 'fs'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DbService {
  constructor(private readonly config: Record<string, any>) {
    const _path = path.resolve(__dirname, '../config/')
    readdirSync(_path).map(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(_path, file))
        if (module.default)
          console.warn(module.default())
      }
    })
  }

  public connect() {
    return `success,url:${this.config.url}`
  }
}
