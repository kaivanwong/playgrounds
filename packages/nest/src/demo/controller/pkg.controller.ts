import { Controller, Get, Inject } from '@nestjs/common'

@Controller('pkg')
export class PkgController {
  constructor(@Inject('pkgName') private pkgName: string) { }

  @Get()
  getPkgName() {
    return this.pkgName
  }
}
