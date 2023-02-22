import { Inject, Injectable } from '@nestjs/common'
import { TestService } from './test.service'

@Injectable()
export class DemoService {
  constructor(@Inject('config') private readonly config: Record<string, any>, private readonly testService: TestService, @Inject('testDesc') private readonly testDesc: string) { }

  get() {
    return this.config.url
  }

  getTest() {
    return this.testService.getTest() + this.testDesc
  }
}
