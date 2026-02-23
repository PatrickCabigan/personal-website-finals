import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

let cachedApp;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule);
    
    // Allow multiple frontend URLs
    app.enableCors({
      origin: [
        'https://personal-website-finals-e8j8.vercel.app',
        'https://personal-website-finals-e8j8-6ylizob2x-patrickcabigans-projects.vercel.app',
        process.env.FRONTEND_URL,
        process.env.FRONTEND_URL_1,
        process.env.FRONTEND_URL_2
      ].filter(Boolean),
      credentials: true,
    });
    
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));
    
    app.use(helmet());
    app.setGlobalPrefix('api');
    
    await app.init();
    cachedApp = app;
  }
  return cachedApp;
}

export default async function handler(req, res) {
  try {
    const app = await bootstrap();
    const server = app.getHttpAdapter().getInstance();
    return server(req, res);
  } catch (error) {
    console.error('Serverless error:', error);
    res.status(500).json({ error: error.message });
  }
}

if (!process.env.VERCEL) {
  async function localBootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(3001);
    console.log('✨ Personal Website API running on http://localhost:3001');
  }
  localBootstrap();
}