import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 검증 규칙이 정의되어 있지 않은 입력 값들을 모두 제거해주는 옵션
      whitelist: true,
      // 상세 에러 메시지를 비활성화하는 옵션입니다. 배포시는 true
      disableErrorMessages: false,
    }),
  );
  await app.listen(3000);
}
bootstrap();
