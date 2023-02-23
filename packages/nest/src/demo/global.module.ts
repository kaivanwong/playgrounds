import { DynamicModule, Global, Module } from '@nestjs/common'

@Global()
@Module({
  providers: [
    { provide: 'global', useValue: 'Here is global' },
  ],
})
export class GlobalModule {
  static register(config: { path: string }): DynamicModule {
    return {
      module: GlobalModule,
      providers: [{
        provide: 'register',
        useValue: 'Here is register',
      }, {
        provide: 'config',
        useValue: config,
      }],
      exports: ['register', 'config'],
    }
  }
}
