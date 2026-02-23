import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { SupabaseConfig } from '../config/supabase.config';
import { CreateLogDto } from './dto/create-log.dto';
import { TravelLog } from './interfaces/travel-log.interface';

@Injectable()
export class TravelLogService {
  constructor(private supabaseConfig: SupabaseConfig) {}

  async create(createLogDto: CreateLogDto): Promise<TravelLog> {
    const supabase = this.supabaseConfig.getAdminClient();
    
    const { data, error } = await supabase
      .from('travel_logs')
      .insert([{
        traveler_name: createLogDto.traveler_name.trim(),
        message: createLogDto.message.trim(),
        region: createLogDto.region || null,
      }])
      .select()
      .single();

    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async findAll(page: number = 1, limit: number = 20) {
    const supabase = this.supabaseConfig.getAdminClient();
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { count } = await supabase
      .from('travel_logs')
      .select('*', { count: 'exact', head: true });

    const { data, error } = await supabase
      .from('travel_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) throw new BadRequestException(error.message);
    
    return {
      data: data || [],
      total: count || 0,
    };
  }

  async likeLog(id: string): Promise<{ likes: number }> {
    const supabase = this.supabaseConfig.getAdminClient();
    
    const { data, error } = await supabase
      .rpc('increment_log_likes', { log_id: id });

    if (error) throw new BadRequestException(error.message);
    return { likes: data };
  }
}