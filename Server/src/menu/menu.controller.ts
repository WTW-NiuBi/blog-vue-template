import { Controller, Get } from '@nestjs/common';

@Controller('api/menu')
export class MenuController {
  private readonly items = [
    { id: '1', name: '戚风蛋糕', desc: '轻盈蓬松，蛋香与奶香平衡', emoji: '🍰', bg: 'linear-gradient(135deg, #fce4c8 0%, #f5d5b8 100%)' },
    { id: '2', name: '可颂', desc: '酥脆外皮，内里柔软', emoji: '🥐', bg: 'linear-gradient(135deg, #e8d5c4 0%, #ddc9b8 100%)' },
    { id: '3', name: '马卡龙', desc: '法式杏仁饼，多种口味', emoji: '🍬', bg: 'linear-gradient(135deg, #f0dde0 0%, #e8d0d5 100%)' },
    { id: '4', name: '提拉米苏', desc: '马斯卡彭与咖啡的经典组合', emoji: '☕', bg: 'linear-gradient(135deg, #d4c4b0 0%, #c9b89e 100%)' },
    { id: '5', name: '草莓塔', desc: '当季鲜果与香草卡仕达', emoji: '🍓', bg: 'linear-gradient(135deg, #f8e0e0 0%, #f0d4d4 100%)' },
    { id: '6', name: '布朗尼', desc: '浓郁巧克力，外脆内软', emoji: '🍫', bg: 'linear-gradient(135deg, #c9b8a8 0%, #b8a898 100%)' },
  ];

  @Get()
  get() {
    return this.items;
  }
}
