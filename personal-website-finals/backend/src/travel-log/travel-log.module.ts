import { Module } from '@nestjs/common';
import { TravelLogService } from './travel-log.service';
import { TravelLogController } from './travel-log.controller';
import { SupabaseConfig } from '../config/supabase.config';

@Module({
  controllers: [TravelLogController],
  providers: [TravelLogService, SupabaseConfig],
})
export class TravelLogModule {}