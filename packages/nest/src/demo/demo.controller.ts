import { Controller, Get } from '@nestjs/common'
import { DemoService } from './demo.service'

@Controller('demo')
export class DemoController {
  constructor(private readonly demoSerive: DemoService) { }

  @Get()
  getConfig() {
    return this.demoSerive.get()
  }
}
