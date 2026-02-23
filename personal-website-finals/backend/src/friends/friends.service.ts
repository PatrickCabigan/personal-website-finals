import { Injectable, BadRequestException } from '@nestjs/common';
import { SupabaseConfig } from '../config/supabase.config';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { Friend } from './interfaces/friend.interface';

@Injectable()
export class FriendsService {
  constructor(private supabaseConfig: SupabaseConfig) {}

  async create(createFriendDto: CreateFriendDto): Promise<Friend> {
    const supabase = this.supabaseConfig.getAdminClient();
    
    const { data, error } = await supabase
      .from('friends')
      .insert([createFriendDto])
      .select()
      .single();

    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async findAll(search?: string): Promise<Friend[]> {
    const supabase = this.supabaseConfig.getAdminClient();
    let query = supabase.from('friends').select('*');
    
    if (search) {
      query = query.ilike('name', `%${search}%`);
    }
    
    const { data, error } = await query.order('name');
    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async update(id: string, updateFriendDto: UpdateFriendDto): Promise<Friend> {
    const supabase = this.supabaseConfig.getAdminClient();
    
    const { data, error } = await supabase
      .from('friends')
      .update(updateFriendDto)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async remove(id: string): Promise<void> {
    const supabase = this.supabaseConfig.getAdminClient();
    
    const { error } = await supabase
      .from('friends')
      .delete()
      .eq('id', id);

    if (error) throw new BadRequestException(error.message);
  }
}