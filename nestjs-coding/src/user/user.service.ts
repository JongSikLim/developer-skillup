import { Injectable } from '@nestjs/common';
import { PgService } from 'src/pg/pg.service';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private readonly pgService: PgService) {}

  async getUserList(): Promise<User[]> {
    const result = await this.pgService.runQuery(`
    select * from public.user
    `);

    return result['rows'];
  }

  async getUserDetail(user_id: string): Promise<User> {
    const result = await this.pgService.runQuery(`
    select * from public.user where user_id='${user_id}'`);
    return result['rows'];
  }

  async insertUser(user: User): Promise<User> {
    const result = await this.pgService.runQuery(`
        insert into "user" (name, tel, group_id) values ('${user.name}', '${user.tel}', '${user.group_id}')
    `);

    return result['rows'];
  }

  async updateUser(user: User): Promise<User> {
    const result = await this.pgService.runQuery(`
    update 'user' set name='${user.name}' tel='${user.tel}' where user_id='${user.user_id}' `);

    return result['rows'];
  }

  async deleteUser(user_id: string): Promise<void> {
    const result = await this.pgService.runQuery(`
    delete from 'user' where user_id='${user_id}'`);

    return result['rows'];
  }

  async getGroupUserList(group_id: string): Promise<User[]> {
    const result = await this.pgService.runQuery(`
        select * from public.user where group_id='${group_id}'
      `);

    return result['rows'];
  }
}
