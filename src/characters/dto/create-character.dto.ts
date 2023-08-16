import { IsArray, IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateCharacterDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsArray() @IsString({each: true})
    alternate_names: string[];

    @IsString()
    species: string;

    @IsString()
    gender: string;

    @IsString()
    house: string;

    @IsString()
    dateOfBirth: string;

    @IsNumber()
    yearOfBirth: number;

    @IsBoolean()
    wizard: boolean;

    @IsString()
    ancestry: string;

    @IsString()
    eyeColour: string;

    @IsString()
    hairColour: string;

    @IsString()
    patronus: string;

    @IsBoolean()
    hogwartsStudent: boolean;

    @IsBoolean()
    hogwartsStaff: boolean;

    @IsString()
    actor: string;

    @IsArray() @IsString({each: true})
    alternate_actors: string[]

    @IsBoolean()
    alive: boolean;

    @IsString()
    image: string;
}
