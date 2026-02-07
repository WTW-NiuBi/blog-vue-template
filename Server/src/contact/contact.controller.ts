import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';

const showData = {
  title: '到店品尝',
  subtitle: '欢迎来店里坐坐，我们等你',
  address: '某某市某某区某某路 123 号',
  hours: '周二至周日 10:00 — 18:00',
  phone: '400-000-0000',
  buttonText: '查看甜品',
};

const RESULT_MESSAGE = '__message';

@Controller('api/contact')
export class ContactController {
  @Get()
  get() {
    return showData;
  }

  @Post()
  submit(
    @Body() body: { name?: string; phone?: string; message?: string },
  ) {
    const hasContent =
      (body.name?.trim()?.length ?? 0) > 0 ||
      (body.phone?.trim()?.length ?? 0) > 0 ||
      (body.message?.trim()?.length ?? 0) > 0;
    if (!hasContent) {
      throw new BadRequestException('请至少填写一项联系信息或留言');
    }
    return {
      [RESULT_MESSAGE]: '提交成功，我们会尽快与您联系',
      data: null,
    };
  }
}
