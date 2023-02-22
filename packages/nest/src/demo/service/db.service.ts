import path from 'path'
import { readdirSync } from 'fs'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DbService {
  dbConfig = {}
  constructor(private readonly config: Record<string, any>) {
    const _path = path.resolve(__dirname, '../config/')
    readdirSync(_path).map(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(_path, file))
        if (module.default)
          this.dbConfig = { ...this.dbConfig, ...module.default() }
      }
    })
  }

  getDbConfig() {
    return this.dbConfig
  }

  public connect() {
    return `success,url:${this.config.url}`
  }
}
