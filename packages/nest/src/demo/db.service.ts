import { Injectable } from '@nestjs/common'

@Injectable()
export class DbService {
  public connect() {
    return 'success'
  }
}
