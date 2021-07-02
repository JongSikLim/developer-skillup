import { Body, Put } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

export class User {
  name: string;
  tel: string;
}

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  getHello(): Promise<User[]> {
    return this.appService.getUserList();
  }

  @Post('add')
  async insertHello(@Body() body: User) {
    return await this.appService.insertUser(body);
  }

  @Put('update')
  async updateUser(@Body() body: User) {
    return await this.appService.updateUser(body);
  }
}
