import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @HttpCode(200)
  postHello(): string {
    return 'hello post';
  }
}
