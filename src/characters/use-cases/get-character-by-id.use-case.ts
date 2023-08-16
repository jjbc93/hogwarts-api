import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CharacterRepository } from "../interfaces/character-service.interface";
import { Character } from "../entities/character.entity";

@Injectable()
export class GetCharacterByIdUseCase {

    constructor(
        @Inject('CHARACTER_REPOSITORY') private characterRepository: CharacterRepository
    ) {}

    public async exec(id: string): Promise<Character> {
        const character = await this.characterRepository.findById(id);
        //* Descomentar para ver una exception capturada por el AllExceptionsFilter
        //throw new Error('Parameter is not a number!');
        if (!character) { throw new NotFoundException("Character not found"); }
        return character;
    }
}