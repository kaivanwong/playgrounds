import path from 'path'
import { Module } from '@nestjs/common'
import { config as dotenv } from 'dotenv'
import { config as devConfig } from './config/dev.config'
import { config as prodConfig } from './config/prod.config'
import { DemoController } from './demo.controller'
import { DemoService } from './demo.service'
import { PkgService } from './service/pkg.service'
import { PkgController } from './controller/pkg.controller'
import { DbService } from './service/db.service'
import { TestModule } from './test.module'
import { GlobalModule } from './global.module'

dotenv({ path: path.join(__dirname, '../../.env') })

console.warn(`Mode:${process.env.NODE_ENV}`)

@Module({
  imports: [TestModule, GlobalModule.register({ path: path.resolve(__dirname, './config') })],
  controllers: [DemoController, PkgController],
  providers: [
    DemoService,
    PkgService,
    {
      provide: 'pkgName',
      useValue: '@kaivanwong/nest',
    },
    {
      provide: 'envConfig',
      useValue: process.env.NODE_ENV === 'development' ? devConfig : prodConfig,
    },
    {
      provide: 'db',
      inject: ['envConfig'],
      useFactory(GlobalModule) {
        return new DbService(GlobalModule)
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
  /**
   * 异步服务 providers
   * providers: [{
   *    privide:'dbClient',
   *    inject: ['envConfig'],
   *    useFactory:async(configService)=> {
   *        return new Promise((r)=>{
   *            setTimeout(()-=>{r('ok!')},3000)
   *        })
   *    }
   * }]
   */
})
export class DemoModule { }
