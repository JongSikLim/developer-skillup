import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { PgService } from 'src/pg/pg.service';

@Module({
  providers: [GroupService, PgService],
  controllers: [GroupController],
})
export class GroupModule {}
