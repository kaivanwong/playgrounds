import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class DemoService {
  constructor(@Inject('config') private readonly config: Record<string, any>) { }

  get() {
    return this.config.url
  }
}
