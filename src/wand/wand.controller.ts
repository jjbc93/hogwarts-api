import { Controller, UseFilters } from '@nestjs/common';
import { WandService } from './wand.service';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';


@ApiTags('Wands')
@Controller('wands')
@UseFilters(new HttpExceptionFilter())
export class WandController {
  
}
