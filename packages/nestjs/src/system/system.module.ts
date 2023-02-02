import { Module } from '@nestjs/common'
import { SystemController } from './controller/system.controller'
import { SystemService } from './service/system.service'

@Module({
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule {}
