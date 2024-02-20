import { DynamicModule, Module, FactoryProvider, ModuleMetadata } from '@nestjs/common';
import IORedis, { Redis, RedisOptions } from 'ioredis';

type RedisModuleOptions = {
  connectionOptions: RedisOptions;
  onClientReady?: (client: Redis) => void;
};

type RedisAsyncModuleOptions = {
  useFactory: (...args: any[]) => Promise<RedisModuleOptions> | RedisModuleOptions;
} & Pick<FactoryProvider, 'inject'> & Pick<ModuleMetadata, 'imports'>;

@Module({})
export class RedisModule {
  static async registerAsync(): Promise<DynamicModule> {
    return {
      module: RedisModule,
      imports: [],
      providers: [],
      exports: [],
    };
  }
}
