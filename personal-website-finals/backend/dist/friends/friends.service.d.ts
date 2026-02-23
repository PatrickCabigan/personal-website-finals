import { SupabaseConfig } from '../config/supabase.config';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { Friend } from './interfaces/friend.interface';
export declare class FriendsService {
    private supabaseConfig;
    constructor(supabaseConfig: SupabaseConfig);
    create(createFriendDto: CreateFriendDto): Promise<Friend>;
    findAll(search?: string): Promise<Friend[]>;
    update(id: string, updateFriendDto: UpdateFriendDto): Promise<Friend>;
    remove(id: string): Promise<void>;
}
