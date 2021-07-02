import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Group } from './group';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get('list')
  getGroupList(): Promise<Group[]> {
    return this.groupService.getGroupList();
  }
  @Get(':group_id')
  getGroupDetail(@Param() params): Promise<Group> {
    const { group_id } = params;
    return this.groupService.getGroupDetail(group_id);
  }
  @Post('')
  insertGroup(@Body() body: Group): Promise<Group> {
    return this.groupService.insertGroup(body);
  }
  @Put('')
  updateGroup(@Body() body: Group): Promise<Group> {
    return this.groupService.updateGroup(body);
  }
  @Delete(':group_id')
  deleteGroup(@Param() params): Promise<void> {
    const { group_id } = params;
    return this.groupService.deleteGroup(group_id);
  }
}
