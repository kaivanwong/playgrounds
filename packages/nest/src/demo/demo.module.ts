import { join } from 'path'
import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import { DemoController } from './demo.controller'
import { DemoService } from './demo.service'
import { TestController } from './test.controller'
import { TestService } from './test.service'

config({ path: join(__dirname, '../../.env') })

console.warn(process.env.NODE_ENV)

@Module({
  controllers: [DemoController, TestController],
  providers: [DemoService, TestService, {
    provide: 'pkgName',
    useValue: '@kaivanwong/nest',
  }],
  /**
   * providers 完整写法：
   * providers: {
   *    provide: DemoService || 'demo',
   *    useClass: DemoService
   * }
   */
  /**
   * 根据环境变量判断
   * providers: {
   *    provide: 'env',
   *    useValue: process.env.NODE_ENV == 'development' ? 'dev' : 'prod'
   * }
   */
})
export class DemoModule { }
