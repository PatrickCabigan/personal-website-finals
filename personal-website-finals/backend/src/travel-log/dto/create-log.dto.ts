import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateLogDto {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(100, { message: 'Name too long' })
  traveler_name: string;

  @IsString()
  @MinLength(3, { message: 'Message must be at least 3 characters' })
  @MaxLength(500, { message: 'Message too long' })
  message: string;

  @IsString()
  @IsOptional()
  region?: string;
}