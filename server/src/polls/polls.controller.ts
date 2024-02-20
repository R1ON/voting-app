import { Controller, Logger, Post, Body } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dto';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollsService: PollsService) {}

  @Post()
  async create(@Body() data: CreatePollDto) {
    const result = await this.pollsService.create(data);

    return result;
  }

  @Post('/join')
  async join(@Body() data: JoinPollDto) {
    const result = await this.pollsService.join(data);

    return result;
  }

  @Post('/rejoin')
  async reJoin() {
    const result = await this.pollsService.rejoin({
      name: 'later',
      userId: 'later',
      pollId: 'later',
    });

    return result;
  }
}
