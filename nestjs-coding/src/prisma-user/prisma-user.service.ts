import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class PrismaUserService {
  constructor(private readonly prisma: PrismaService) {}
  async getUserList(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async insertUser(user: Prisma.UserCreateInput) {
    const result = this.prisma.user.create({
      data: user,
    });

    return;
  }
}
