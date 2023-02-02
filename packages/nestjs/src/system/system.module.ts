import { Module } from '@nestjs/common'
import { SystemInfoController } from './controller/info.controller'
import { SystemInfoService } from './service/info.service'

@Module({
  controllers: [SystemInfoController],
  providers: [SystemInfoService],
})
export class SystemModule {}
