import { Injectable } from '@nestjs/common'
import type { App } from './interfaces/app.interface'
import { app } from './app.config'

@Injectable()
export class AppService {
  findAll(): App {
    return app
  }

  getAppName(): string {
    return app.name
  }

  getAppVersion(): string {
    return app.version
  }
}
