import { IsArray, IsOptional, IsString } from "class-validator";

export class QueryCharacterDto {
    
    @IsOptional() @IsString()
    name: string

    @IsOptional() @IsString()
    alternate_names: string;

    @IsOptional() @IsString()
    sortOrder: string;

    @IsOptional() @IsString()
    sortKey: string;
}