import {Controller, Get, Post} from '@nestjs/common';

import { Message } from '@mreza-mladih-platform/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('addUser')
  addData(): Message {
    console.log("request");
    return this.appService.getData();
  }
}
