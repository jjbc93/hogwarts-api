import { Wand } from "../entities/wand.entity";

export interface WandRepository {
    create(wand: Wand): Promise<Wand>
} 