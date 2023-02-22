import { Module } from '@nestjs/common'
import { TestController } from './test.controller'
import { TestService } from './test.service'

@Module({
  controllers: [TestController],
  providers: [TestService, {
    provide: 'testDesc',
    useValue: ' Here is test module desc',
  }],
  exports: [TestService, 'testDesc'],
  /**
   * 导出共享服务完整写法
   * providers: [{
   *    provide: TestService,
   *    useClass: TestService,
   *    export: true
   * }]
   */
})
export class TestModule { }
