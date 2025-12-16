import { IsString, IsUUID, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsUUID()
    id: string;

    @IsString()
    @MinLength(3)
    name: string;
    
    createdAt: number;

}
