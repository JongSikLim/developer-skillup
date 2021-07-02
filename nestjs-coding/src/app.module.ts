import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PgModule } from './pg/pg.module';
import { GroupModule } from './group/group.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaUserService } from './prisma-user/prisma-user.service';
import { PrismaUserModule } from './prisma-user/prisma-user.module';

@Module({
  imports: [PgModule, GroupModule, UserModule, PrismaModule, PrismaUserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, PrismaUserService],
})
export class AppModule {}
