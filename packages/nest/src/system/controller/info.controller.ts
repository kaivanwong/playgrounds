import { Controller, Get } from '@nestjs/common'
import { SystemInfo } from '../interfaces/info'
import { SystemInfoService } from './../service/info.service'

@Controller('system/info')
export class SystemInfoController {
  constructor(private readonly systemInfoService: SystemInfoService) { }

  @Get()
  findAll(): SystemInfo {
    return this.systemInfoService.findAll()
  }
}
