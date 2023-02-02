import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getAppName(): string {
    return '@kaivanwong/playgrounds-nestjs'
  }
}
