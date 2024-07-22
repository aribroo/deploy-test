import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appPort = process.env.APP_PORT || 3000

  await app.listen(appPort, () => {
    console.log(`Server running on port ${appPort}`)
  });
}
bootstrap();
