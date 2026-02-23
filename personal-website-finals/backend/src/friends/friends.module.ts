import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { SupabaseConfig } from '../config/supabase.config';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService, SupabaseConfig],
})
export class FriendsModule {}