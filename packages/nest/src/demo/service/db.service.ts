import { Injectable } from '@nestjs/common'

@Injectable()
export class DbService {
  constructor(private readonly config: Record<string, any>) { }
  public connect() {
    return `success,url:${this.config.url}`
  }
}
