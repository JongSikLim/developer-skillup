import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  getUserList(): Promise<User[]> {
    return this.userService.getUserList();
  }

  @Get(':user_id')
  getUserDetail(@Param() params): Promise<User> {
    const { user_id } = params;
    return this.userService.getUserDetail(user_id);
  }

  @Get('group/:group_id')
  getGroupUserList(@Param() params): Promise<User[]> {
    const { group_id } = params;

    return this.userService.getGroupUserList(group_id);
  }

  @Post('')
  insertUser(@Body() body: User): Promise<User> {
    return this.userService.insertUser(body);
  }

  @Put('')
  updateUser(@Body() body: User): Promise<User> {
    return this.userService.updateUser(body);
  }

  @Delete(':user_id')
  deleteUser(@Param() params): Promise<void> {
    const { user_id } = params;
    return this.userService.deleteUser(user_id);
  }
}
