import { Controller, Get } from '@nestjs/common'
import type { AppService } from './app.service'
import type { App } from './interfaces/app.interface'

@Controller('app')
export class AppController {
  constructor(private appSerivce: AppService) { }

  @Get()
  findAll(): App {
    return this.appSerivce.findAll()
  }
}
