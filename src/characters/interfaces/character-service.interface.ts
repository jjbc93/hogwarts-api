import { CreateCharacterDto } from "../dto/create-character.dto"
import { Character } from "../entities/character.entity"

export interface CharacterRepository {
    findAll(options: any): Promise<Character[]>
    findById(id: string): Promise<Character>
    create(character: Character): Promise<Character>
    

} 