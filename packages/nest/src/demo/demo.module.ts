import path from 'path'
import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import { config as devConfig } from './config/dev.config'
import { config as prodConfig } from './config/prod.config'
import { DemoController } from './demo.controller'
import { DemoService } from './demo.service'
import { TestController } from './test.controller'
import { TestService } from './test.service'
import { DbService } from './db.service'

config({ path: path.join(__dirname, '../../.env') })

console.warn(`Mode:${process.env.NODE_ENV}`)

@Module({
  controllers: [DemoController, TestController],
  providers: [
    DemoService,
    TestService,
    DbService,
    {
      provide: 'pkgName',
      useValue: '@kaivanwong/nest',
    },
    {
      provide: 'config',
      useValue: process.env.NODE_ENV === 'development' ? devConfig : prodConfig,
    },
    {
      provide: 'db',
      inject: ['config'],
      useFactory(configService) {
        console.warn(`Config:${JSON.stringify(configService)}`)
        return new DbService()
      },
    }],
  /**
   * providers 完整写法：
   * const providers = {
   *    provide: DemoService || 'demo',
   *    useClass: DemoService
   * }
   * providers: [providers]
   */
  /**
   * 根据环境变量判断
   * providers: [{
   *    provide: 'env',
   *    useValue: process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
   * }]
   */
  /**
   * 工厂函数
   * providers: [{
   *    privide:'db',
   *    useFactory(){
   *        return 'success'
   *    }
   * }]
   */
})
export class DemoModule { }
