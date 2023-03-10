import { Inject, Injectable } from '@nestjs/common'
import { TestService } from './test.service'

@Injectable()
export class DemoService {
  constructor(@Inject('envConfig') private readonly config: Record<string, any>, private readonly testService: TestService, @Inject('testDesc') private readonly testDesc: string) { }

  get() {
    return this.config
  }

  getTest() {
    return this.testService.getTest() + this.testDesc
  }
}
