import { Controller, Get, Post, Body, Param, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { TravelLogService } from './travel-log.service';
import { CreateLogDto } from './dto/create-log.dto';

@Controller('travel-log')
export class TravelLogController {
  constructor(private readonly travelLogService: TravelLogService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createLogDto: CreateLogDto) {
    const log = await this.travelLogService.create(createLogDto);
    return {
      success: true,
      message: 'Your travel log has been recorded! ✨',
      data: log,
    };
  }

  @Get()
  async findAll(@Query('page') page = '1', @Query('limit') limit = '20') {
    const result = await this.travelLogService.findAll(+page, +limit);
    return {
      success: true,
      data: result.data,
      meta: {
        total: result.total,
        page: +page,
        limit: +limit,
        totalPages: Math.ceil(result.total / +limit),
      },
    };
  }

  @Post(':id/like')
  async like(@Param('id') id: string) {
    const result = await this.travelLogService.likeLog(id);
    return {
      success: true,
      message: 'Thanks for the like! ❤️',
      data: result,
    };
  }
}