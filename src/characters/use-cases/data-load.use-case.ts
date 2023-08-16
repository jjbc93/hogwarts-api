import { Inject, Injectable } from "@nestjs/common";
import { CharacterRepository } from "../interfaces/character-service.interface";
import { WandRepository } from "../../wand/interfaces/wand-interface.interface";
import { Wand } from "../../wand/entities/wand.entity";
import { Character } from "../entities/character.entity";
import { CharactersApiService } from "../services/characters-api.service";

@Injectable()
export class DataLoadUseCase {

    constructor(
        private readonly charactersApiService: CharactersApiService,
        @Inject('CHARACTER_REPOSITORY') private characterRepository: CharacterRepository,
        @Inject('WAND_REPOSITORY') private wandRepository: WandRepository,
    ) {}

    public async exec(): Promise<any> {
        const charactersApi = await this.charactersApiService.exec();
        //? Using cascades to automatically save related objects
        for(const characterApi of charactersApi) {
            const wand = new Wand({...characterApi?.wand});
            const wandDb = await this.wandRepository.create(wand);
            const character = new Character({...characterApi});
            character.wand = wandDb
            this.characterRepository.create(character);
        }
    }
}