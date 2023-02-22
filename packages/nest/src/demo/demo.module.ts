import path from 'path'
import { Module } from '@nestjs/common'
import { config as dotenv } from 'dotenv'
import { config as devConfig } from './config/dev.config'
import { config as prodConfig } from './config/prod.config'
import { DemoController } from './demo.controller'
import { DemoService } from './demo.service'
import { PkgService } from './pkg.service'
import { PkgController } from './pkg.controller'
import { DbService } from './db.service'
import { TestModule } from './test.module'

dotenv({ path: path.join(__dirname, '../../.env') })

console.warn(`Mode:${process.env.NODE_ENV}`)

@Module({
  imports: [TestModule],
  controllers: [DemoController, PkgController],
  providers: [
    DemoService,
    PkgService,
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
        return new DbService(configService)
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
