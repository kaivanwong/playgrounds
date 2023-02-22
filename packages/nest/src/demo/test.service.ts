import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  public getTest() {
    return 'test service. '
  }
}
