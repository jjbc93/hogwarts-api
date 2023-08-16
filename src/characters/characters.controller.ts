import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseFilters } from '@nestjs/common';
import { DataLoadUseCase } from './use-cases/data-load.use-case';
import { GetCharactersUseCase } from './use-cases/get-characters.use-case';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryCharacterDto } from './dto/query-character.dto';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { GetCharacterByIdUseCase } from './use-cases/get-character-by-id.use-case';

@ApiTags('Characters')
@Controller('characters')
@UseFilters(new HttpExceptionFilter())
export class CharactersController {
  constructor(
    private readonly dataLoadUseCase: DataLoadUseCase,
    private readonly getCharactersUseCase: GetCharactersUseCase,
    private readonly getCharacterByIdUseCase: GetCharacterByIdUseCase
  ) {}

  @ApiResponse({ status: 200})
  @Get()
  async findAll(@Query() query: QueryCharacterDto) {
    return this.getCharactersUseCase.exec(query);
  }
  @ApiResponse({ status: 200})

  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getCharacterByIdUseCase.exec(id);
  }

  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiResponse({ status: 200})
  @Post('data-load')
  async dataLoad() {
    await this.dataLoadUseCase.exec();
    return {message: "Data upload complete"}
  }
}
