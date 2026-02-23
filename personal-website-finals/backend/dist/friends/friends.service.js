"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsService = void 0;
const common_1 = require("@nestjs/common");
const supabase_config_1 = require("../config/supabase.config");
let FriendsService = class FriendsService {
    constructor(supabaseConfig) {
        this.supabaseConfig = supabaseConfig;
    }
    async create(createFriendDto) {
        const supabase = this.supabaseConfig.getAdminClient();
        const { data, error } = await supabase
            .from('friends')
            .insert([createFriendDto])
            .select()
            .single();
        if (error)
            throw new common_1.BadRequestException(error.message);
        return data;
    }
    async findAll(search) {
        const supabase = this.supabaseConfig.getAdminClient();
        let query = supabase.from('friends').select('*');
        if (search) {
            query = query.ilike('name', `%${search}%`);
        }
        const { data, error } = await query.order('name');
        if (error)
            throw new common_1.BadRequestException(error.message);
        return data || [];
    }
    async update(id, updateFriendDto) {
        const supabase = this.supabaseConfig.getAdminClient();
        const { data, error } = await supabase
            .from('friends')
            .update(updateFriendDto)
            .eq('id', id)
            .select()
            .single();
        if (error)
            throw new common_1.BadRequestException(error.message);
        return data;
    }
    async remove(id) {
        const supabase = this.supabaseConfig.getAdminClient();
        const { error } = await supabase
            .from('friends')
            .delete()
            .eq('id', id);
        if (error)
            throw new common_1.BadRequestException(error.message);
    }
};
exports.FriendsService = FriendsService;
exports.FriendsService = FriendsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_config_1.SupabaseConfig])
], FriendsService);
//# sourceMappingURL=friends.service.js.map