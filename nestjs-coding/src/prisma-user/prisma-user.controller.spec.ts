import { Test, TestingModule } from '@nestjs/testing';
import { PrismaUserController } from './prisma-user.controller';

describe('PrismaUserController', () => {
  let controller: PrismaUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrismaUserController],
    }).compile();

    controller = module.get<PrismaUserController>(PrismaUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
