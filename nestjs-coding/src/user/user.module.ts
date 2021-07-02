import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PgService } from 'src/pg/pg.service';

@Module({
  providers: [UserService, PgService],
  controllers: [UserController],
})
export class UserModule {}
