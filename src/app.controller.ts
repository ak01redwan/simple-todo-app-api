import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return "Hello, World. from Ahmed first NestJS app!";
  }
}
