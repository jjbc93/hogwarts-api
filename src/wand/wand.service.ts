import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wand } from './entities/wand.entity';
import { Repository } from 'typeorm';
import { WandRepository } from './interfaces/wand-service.interface';

@Injectable()
export class WandService implements WandRepository {
    constructor(
        @InjectRepository(Wand)
        private readonly wandRepository :Repository<Wand>,
    ) {}

    create(wand: Wand) {
        return this.wandRepository.save(wand);
    }
}
