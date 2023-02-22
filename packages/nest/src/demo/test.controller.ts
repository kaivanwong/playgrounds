import { Controller, Inject } from '@nestjs/common'

@Controller('test')
export class TestController {
  constructor(@Inject('pkgName') private pkgName: string) { }
}
