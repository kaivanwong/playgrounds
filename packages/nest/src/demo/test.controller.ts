import { Controller, Get, Inject } from '@nestjs/common'

@Controller('test')
export class TestController {
  constructor(@Inject('pkgName') private pkgName: string) { }

  @Get()
  getPkgName() {
    return this.pkgName
  }
}
