import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class PkgService {
  constructor(@Inject('pkgName') private pkgName: string) { }

  getPkgName() {
    return this.pkgName
  }
}
