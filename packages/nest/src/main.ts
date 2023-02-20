import { NestFactory } from '@nestjs/core'
import { SystemModule } from './system/system.module'

NestFactory.create(SystemModule).then(async (app) => {
  await app.listen(3000)
}).catch((error) => {
  console.error(error)
})
