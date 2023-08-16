import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "wands"})
export class Wand {
    
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: String, nullable: true})
    wood: string;

    @Column({type: String, nullable: true})
    core: string;

    @Column({type: "float", nullable: true})
    length: number;

    constructor(entity: Partial<Wand>) {
        Object.assign(this, entity);
    }
}