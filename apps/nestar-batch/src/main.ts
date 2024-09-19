import { NestFactory } from '@nestjs/core';
import { NestarBatchModule } from './batch.module';

async function bootstrap() {
  const app = await NestFactory.create(NestarBatchModule);
  await app.listen(process.env.PORT_BATCH);
}
bootstrap();
