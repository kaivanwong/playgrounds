import { Controller, Get, Inject } from '@nestjs/common'
import { DemoService } from './demo.service'

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService, @Inject('db') private readonly dbService: any, @Inject('register') private readonly reg: string) { }

  @Get()
  getConfig(): any {
    // return this.demoService.get()
    // return this.dbService.connect()
    // return this.demoService.getTest()
    return this.dbService.getDbConfig('db.url')
    // return this.reg
  }
}
