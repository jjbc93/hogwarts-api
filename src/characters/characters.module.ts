import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { HttpModule } from '@nestjs/axios';
import { HttpConnectionService } from './services/http-connection.service';
import { DataLoadUseCase } from './use-cases/data-load.use-case';
import { GetCharactersUseCase } from './use-cases/get-characters.use-case';
import { WandModule } from '../wand/wand.module';
import { CharactersApiService } from './services/characters-api.service';
import { GetCharacterByIdUseCase } from './use-cases/get-character-by-id.use-case';

@Module({
  imports:[
    HttpModule,
    WandModule,
    TypeOrmModule.forFeature([Character]),
    
  ],
  controllers: [CharactersController],
  providers: [
    CharactersService, HttpConnectionService, DataLoadUseCase, GetCharactersUseCase, CharactersApiService, GetCharacterByIdUseCase,
    {provide: "CHARACTER_REPOSITORY", useClass: CharactersService},
  ],
})
export class CharactersModule {}
