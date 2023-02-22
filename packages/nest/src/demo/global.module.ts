import { DynamicModule, Global, Module } from '@nestjs/common'

@Global()
@Module({
  providers: [
    { provide: 'global', useValue: 'Here is global' },
  ],
})
export class GlobalModule {
  static register(options: { path: string }): DynamicModule {
    console.warn(options)
    return {
      module: GlobalModule,
      providers: [{
        provide: 'register',
        useValue: 'Here is register',
      }],
      exports: ['register'],
    }
  }
}
