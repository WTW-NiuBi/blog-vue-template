import { Controller, Get } from '@nestjs/common';

@Controller('api/hero')
export class HeroController {
  @Get()
  get() {
    return {
      tagline: '手作 · 当日现做',
      title: '33甜品店',
      desc: '用自然食材，做让你安心的一口甜',
      buttonText: '查看甜品',
      scrollText: '向下滚动',
    };
  }
}
