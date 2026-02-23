import { SupabaseConfig } from '../config/supabase.config';
import { CreateLogDto } from './dto/create-log.dto';
import { TravelLog } from './interfaces/travel-log.interface';
export declare class TravelLogService {
    private supabaseConfig;
    constructor(supabaseConfig: SupabaseConfig);
    create(createLogDto: CreateLogDto): Promise<TravelLog>;
    findAll(page?: number, limit?: number): Promise<{
        data: any[];
        total: number;
    }>;
    likeLog(id: string): Promise<{
        likes: number;
    }>;
}
