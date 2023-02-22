import path from 'path'
import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import { config as devConfig } from './config/dev.config'
import { config as prodConfig } from './config/prod.config'
import { DemoController } from './demo.controller'
import { DemoService } from './demo.service'
import { TestController } from './test.controller'
import { TestService } from './test.service'

config({ path: path.join(__dirname, '../../.env') })

console.warn(`Mode:${process.env.NODE_ENV}`)

@Module({
  controllers: [DemoController, TestController],
  providers: [DemoService, TestService, {
    provide: 'pkgName',
    useValue: '@kaivanwong/nest',
  }, {
    provide: 'config',
    useValue: process.env.NODE_ENV === 'development' ? devConfig : prodConfig,
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
   *    useValue: process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
   * }
   */
})
export class DemoModule { }
