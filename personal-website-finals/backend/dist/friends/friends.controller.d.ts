import { FriendsService } from './friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
export declare class FriendsController {
    private readonly friendsService;
    constructor(friendsService: FriendsService);
    create(createFriendDto: CreateFriendDto): Promise<import("./interfaces/friend.interface").Friend>;
    findAll(search?: string): Promise<import("./interfaces/friend.interface").Friend[]>;
    update(id: string, updateFriendDto: UpdateFriendDto): Promise<import("./interfaces/friend.interface").Friend>;
    remove(id: string): Promise<void>;
}
