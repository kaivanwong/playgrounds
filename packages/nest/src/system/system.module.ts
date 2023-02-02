import { Module } from '@nestjs/common'
import { SystemInfoController } from './controller/info.controller'
import { SystemInfoService } from './service/info.service'

@Module({
  imports: [],
  controllers: [SystemInfoController],
  providers: [SystemInfoService],
  exports: [],
})
export class SystemModule { }
