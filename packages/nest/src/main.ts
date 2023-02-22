import { NestFactory } from '@nestjs/core'
import { DemoModule } from './demo/demo.module'

NestFactory.create(DemoModule).then(async (app) => {
  await app.listen(3000)
}).catch((error) => {
  console.error(error)
})
