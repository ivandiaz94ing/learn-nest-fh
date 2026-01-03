// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}


import {IsNumber, IsOptional, IsString, MinLength} from "class-validator";

export class UpdateBrandDto {
    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly name: string;


    @IsNumber()
    @IsOptional()
    readonly createdAt: number;
    
    @IsOptional()
    @IsNumber()
    readonly updatedAt: number;



}