import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Repository } from 'typeorm';
import { CharacterRepository } from './interfaces/character-service.interface';

@Injectable()
export class CharactersService implements CharacterRepository {

  constructor(
    @InjectRepository(Character)
    private readonly characterRepository :Repository<Character>,
  ) {}

  findAll(options: any) {
    return this.characterRepository.find(options);
  }

  create(character: Character) {
    return this.characterRepository.save(character);
  }

  findById(id: string): Promise<Character> {
    return this.characterRepository.findOneBy({id});
  }
}
