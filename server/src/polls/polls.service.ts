import { Injectable } from '@nestjs/common';
import { CreatePollFields, JoinPollFields, RejoinPollFields } from './types';
import { createPollId, createNominationId2, createUserId, createUserId2 } from '../helpers/ids';

@Injectable()
export class PollsService {
  async create(fields: CreatePollFields) {
    const pollId = createPollId();
    const createNominati = createNominationId2();

    // TODO: проверить разницу между генерацией айдишников

    const userId = createUserId();
    const userId2 = createUserId2();

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
