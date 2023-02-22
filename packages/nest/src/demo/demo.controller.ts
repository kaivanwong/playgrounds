import { Controller, Get, Inject } from '@nestjs/common'
import { DemoService } from './demo.service'

@Controller('demo')
export class DemoController {
  constructor(private readonly demoSerive: DemoService, @Inject('db') private readonly dbService: any) { }

  @Get()
  getConfig() {
    // return this.demoSerive.get()
    // return this.dbService.connect()
    return this.demoSerive.getTest()
  }
}
