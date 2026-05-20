import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('DelivrAgency')
    .setDescription('Endpoint e documentação das rotas do sistema de Delivery')
    .setContact(
      'Wadssa Wacemberg',
      'https://github.com/WadssaWacemberg',
      'wadssa@gmail.com',
    )
    .setVersion('1.0')
    .addBearerAuth() // Aqui ativa a autenticação por Token JWT no Swagger
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  const port = process.env.PORT ?? 4000;
  await app.listen(port);

  console.log(` Engine DelivrAgency rodando na porta: ${port}`);
  console.log(
    `📄 Documentação Swagger ativa em: http://localhost:${port}/swagger`,
  );
}

void bootstrap();
