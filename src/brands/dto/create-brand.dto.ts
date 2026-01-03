import { IsNumber, IsString } from "class-validator";

export class CreateBrandDto {

    @IsString()
    readonly name: string;

    @IsNumber()
    readonly createdAt: number;

    

}
