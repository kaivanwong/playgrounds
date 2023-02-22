import { Global, Module } from '@nestjs/common'

@Global()
@Module({
  providers: [
    { provide: 'global', useValue: 'Here is global' },
  ],
})
export class GlobalModule { }
