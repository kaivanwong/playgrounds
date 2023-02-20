import { Injectable } from '@nestjs/common'
import type { SystemInfo } from '../interfaces/info'

@Injectable()
export class SystemInfoService {
  private systemInfo: SystemInfo = {
    name: '@kaivanwong/playgrounds-nestjs',
    version: '0.0.0',
  }

  findAll(): SystemInfo {
    return this.systemInfo
  }
}
