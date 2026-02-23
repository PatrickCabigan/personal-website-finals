"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelLogModule = void 0;
const common_1 = require("@nestjs/common");
const travel_log_service_1 = require("./travel-log.service");
const travel_log_controller_1 = require("./travel-log.controller");
const supabase_config_1 = require("../config/supabase.config");
let TravelLogModule = class TravelLogModule {
};
exports.TravelLogModule = TravelLogModule;
exports.TravelLogModule = TravelLogModule = __decorate([
    (0, common_1.Module)({
        controllers: [travel_log_controller_1.TravelLogController],
        providers: [travel_log_service_1.TravelLogService, supabase_config_1.SupabaseConfig],
    })
], TravelLogModule);
//# sourceMappingURL=travel-log.module.js.map