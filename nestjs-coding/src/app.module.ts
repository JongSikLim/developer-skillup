import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PgModule } from './pg/pg.module';
import { GroupModule } from './group/group.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PgModule, GroupModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
