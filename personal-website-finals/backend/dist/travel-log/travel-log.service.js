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
exports.TravelLogService = void 0;
const common_1 = require("@nestjs/common");
const supabase_config_1 = require("../config/supabase.config");
let TravelLogService = class TravelLogService {
    constructor(supabaseConfig) {
        this.supabaseConfig = supabaseConfig;
    }
    async create(createLogDto) {
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
        if (error)
            throw new common_1.BadRequestException(error.message);
        return data;
    }
    async findAll(page = 1, limit = 20) {
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
        if (error)
            throw new common_1.BadRequestException(error.message);
        return {
            data: data || [],
            total: count || 0,
        };
    }
    async likeLog(id) {
        const supabase = this.supabaseConfig.getAdminClient();
        const { data, error } = await supabase
            .rpc('increment_log_likes', { log_id: id });
        if (error)
            throw new common_1.BadRequestException(error.message);
        return { likes: data };
    }
};
exports.TravelLogService = TravelLogService;
exports.TravelLogService = TravelLogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_config_1.SupabaseConfig])
], TravelLogService);
//# sourceMappingURL=travel-log.service.js.map