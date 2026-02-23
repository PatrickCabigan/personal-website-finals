import { TravelLogService } from './travel-log.service';
import { CreateLogDto } from './dto/create-log.dto';
export declare class TravelLogController {
    private readonly travelLogService;
    constructor(travelLogService: TravelLogService);
    create(createLogDto: CreateLogDto): Promise<{
        success: boolean;
        message: string;
        data: import("./interfaces/travel-log.interface").TravelLog;
    }>;
    findAll(page?: string, limit?: string): Promise<{
        success: boolean;
        data: any[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    like(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            likes: number;
        };
    }>;
}
