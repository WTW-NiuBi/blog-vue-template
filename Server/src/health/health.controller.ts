import { Controller, Get } from '@nestjs/common';

@Controller('api/health')
export class HealthController {
  @Get()
  get() {
    return {
      service: '33-dessert-api',
      timestamp: new Date().toISOString(),
    };
  }
}
