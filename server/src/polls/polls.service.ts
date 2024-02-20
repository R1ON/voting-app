import { Injectable } from '@nestjs/common';
import { CreatePollFields, JoinPollFields, RejoinPollFields } from './types';
import { createPollId, createUserId } from '../helpers/ids';

@Injectable()
export class PollsService {
  async create(fields: CreatePollFields) {
    const pollId = createPollId();
    const userId = createUserId();

    return { ...fields, pollId, userId };
  }

  async join(fields: JoinPollFields) {
    const userId = createUserId();

    return { ...fields, userId };
  }

  async rejoin(fields: RejoinPollFields) {
    return fields;
  }
}
