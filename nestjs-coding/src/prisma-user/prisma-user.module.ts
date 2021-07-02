import { Module } from '@nestjs/common';
import { PrismaUserService } from './prisma-user.service';
import { PrismaUserController } from './prisma-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrismaUserService],
  controllers: [PrismaUserController],
})
export class PrismaUserModule {}
