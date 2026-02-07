import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { ResponseInterceptor } from './common/response.interceptor';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { HealthController } from './health/health.controller';
import { HeroController } from './hero/hero.controller';
import { MenuController } from './menu/menu.controller';
import { AboutController } from './about/about.controller';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [],
  controllers: [
    HealthController,
    HeroController,
    MenuController,
    AboutController,
    ContactController,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class AppModule {}
