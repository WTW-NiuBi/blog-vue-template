import { Controller, Get } from '@nestjs/common';

@Controller('api/about')
export class AboutController {
  @Get()
  get() {
    return {
      title: '关于33甜品店',
      subtitle: '我们相信，好的甜品来自好的食材与耐心',
      paragraphs: [
        '33甜品店诞生于对「简单好吃」的坚持。我们每日现做蛋糕、可颂与各式甜点，选用优质奶油、鸡蛋与当季水果，不添加多余香精与防腐，让你吃到的每一口都安心。',
        '无论是早晨的一块可颂，还是下午的一角戚风，希望33甜品店能成为你日常里的小小确幸。',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=640&q=85&fit=crop',
      imageAlt: '33甜品店手作甜品',
    };
  }
}
