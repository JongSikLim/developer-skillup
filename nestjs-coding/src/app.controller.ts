import { Body, Put } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

export class User {
  name: string;
  tel: string;
}

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
