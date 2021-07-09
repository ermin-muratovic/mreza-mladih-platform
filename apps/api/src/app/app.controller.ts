import {Body, Controller, Get, Post} from '@nestjs/common';

import {Message, Member} from '@mreza-mladih-platform/api-interfaces';

import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('member')
  getUser(): Member[] {
    return this.appService.getMembers();
  }

  @Post('register')
  addMember(@Body() body): Member {
    let member = { name: body.name };
    return this.appService.addMember(member);
  }
}
