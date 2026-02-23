import { IsString, IsOptional } from 'class-validator';

export class CreateFriendDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  vision?: string;

  @IsString()
  @IsOptional()
  avatar_url?: string;

  @IsString()
  @IsOptional()
  status?: string;
}