import { Inject, Injectable } from "@nestjs/common";
import { Character } from "../entities/character.entity";
import { CharacterRepository } from "../interfaces/character-service.interface";
import { QueryCharacterDto } from "../dto/query-character.dto";
import { Any, In, ArrayContains, Like, ArrayContainedBy } from "typeorm";

@Injectable()
export class GetCharactersUseCase {

    constructor(
        @Inject('CHARACTER_REPOSITORY') private characterRepository: CharacterRepository
    ) {}

    public async exec(query: QueryCharacterDto): Promise<Character[]> {
        const queryCriteria = {
            ...query?.name || query.alternate_names ? { where: [
                query?.name ? {name: Like(`%${query.name}%`)} : {},
                query.alternate_names ? {alternate_names: Like(`%${query.alternate_names}%`)} : {},
            ]} :  {},
            relations: {wand: true},
            order: {
                ...query.sortKey ? { [query.sortKey]: query.sortOrder || 'ASC'}: {},
                id: 'DESC'
            }
        } 
        return this.characterRepository.findAll(queryCriteria);
    }
}