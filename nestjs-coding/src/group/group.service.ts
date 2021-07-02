import { Injectable } from '@nestjs/common';
import { PgService } from 'src/pg/pg.service';
import { Group } from './group';

@Injectable()
export class GroupService {
  constructor(private readonly pgService: PgService) {}

  async getGroupList(): Promise<Group[]> {
    const result = await this.pgService.runQuery('select * from public.group');

    return result['rows'];
  }

  async getGroupDetail(group_id: string): Promise<Group> {
    const result = await this.pgService.runQuery(
      `select * from public.group where group_id = '${group_id}'`,
    );
    return result['rows'];
  }

  async insertGroup(group: Group): Promise<Group> {
    console.log('group: ', group);
    const result = await this.pgService.runQuery(
      `insert into "group" (group_name, created_at, updated_at) values ('${
        group.group_name
      }' , to_timestamp(${new Date().getTime()} / 1000.0), to_timestamp(${new Date().getTime()} / 1000.0))`,
    );

    return result['rows'];
  }

  async updateGroup(group: Group): Promise<Group> {
    const result = await this.pgService.runQuery(
      `update "group" set group_name='${group.group_name}' where group_id='${group.group_id}'`,
    );

    return result['rows'];
  }

  async deleteGroup(group_id: string): Promise<void> {
    const result = await this.pgService.runQuery(
      `delete from 'group' where group_id='${group_id}'`,
    );

    return result['rows'];
  }
}
