import { Injectable } from '@nestjs/common';
import { User } from './app.controller';
import { PgService } from './pg/pg.service';
@Injectable()
export class AppService {
  constructor(private readonly pgService: PgService) {}
  async getUserList(): Promise<User[]> {
    const result = await this.pgService.runQuery('select * from public.user');

    return result['rows'];
  }

  async insertUser(user: User) {
    await this.pgService.runQuery(
      `insert into "user" values ('${user.name}','${user.tel})`,
    );
  }

  async updateUser(user: User) {
    await this.pgService.runQuery(
      `update "user" set tel=${user.tel} where name='${user.name}'`,
    );
  }
}
