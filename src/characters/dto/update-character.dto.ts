import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterDto } from './create-character.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateCharacterDto extends PartialType(OmitType(CreateCharacterDto, ['id'] as const)) {}
