import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { PrismaUserService } from './prisma-user.service';

@Controller('prismaUser')
export class PrismaUserController {
  constructor(private readonly prismaUserService: PrismaUserService) {}

  @Get()
  getUserList(): Promise<User[]> {
    return this.prismaUserService.getUserList();
  }

  @Post()
  insertUser(@Body() body: User): Promise<void> {
    return this.prismaUserService.insertUser(body);
  }
}
