import { NestFactory } from '@nestjs/core'
import { UserModule } from './user/user.module'

NestFactory.create(UserModule).then(async (app) => {
  await app.listen(8000)
}).catch((error) => {
  console.error(error)
})
