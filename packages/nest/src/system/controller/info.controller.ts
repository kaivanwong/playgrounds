import { Controller, Get } from '@nestjs/common'
import type { SystemInfo } from '../interfaces/info'
import type { SystemInfoService } from './../service/info.service'

@Controller('system/info')
export class SystemInfoController {
  constructor(private readonly systemInfoService: SystemInfoService) { }

  @Get()
  findAll(): SystemInfo {
    return this.systemInfoService.findAll()
  }
}
