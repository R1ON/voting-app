import { Controller, Logger, Post, Body } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dto';

@Controller('polls')
export class PollsController {
  @Post()
  async create(@Body() data: CreatePollDto) {
    Logger.log('create handler');
    return data;
  }

  @Post('/join')
  async join(@Body() data: JoinPollDto) {
    Logger.log('join handler');
    return data;
  }

  @Post('/rejoin')
  async reJoin() {
    Logger.log('reJoin handler');
  }
}
