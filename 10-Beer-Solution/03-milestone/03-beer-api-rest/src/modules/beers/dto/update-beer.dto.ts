import { PartialType } from '@nestjs/mapped-types';
import { CreateBeerDto } from './create-beer.dto';
import { IsInt, IsOptional, IsPositive, Max, Min } from 'class-validator';

export class UpdateBeerDto extends PartialType(CreateBeerDto) {
  @IsInt()
  @IsPositive()
  @IsOptional()
  amount?: number;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating?: number;
}
