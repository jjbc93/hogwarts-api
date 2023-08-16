import { Wand } from "../../wand/entities/wand.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "characters"})
export class Character {
    @PrimaryColumn({type: String})
    id: string

    @Column({type: String})
    name: string;

    @Column({type: "json"})
    alternate_names: string[]

    @Column({type: String})
    species: string;

    @Column({type: String})
    gender: string;

    @Column({type: String})
    house: string;

    @Column({type: String, nullable: true})
    dateOfBirth?: string;

    @Column({type: "int", nullable: true})
    yearOfBirth: number;

    @Column({type: Boolean})
    wizard: boolean;

    @Column({type: String})
    ancestry: string;

    @Column({type: String})
    eyeColour: string;

    @Column({type: String})
    hairColour: string;

    @OneToOne(() => Wand, {nullable: true})
    @JoinColumn()
    wand?: Wand;

    @Column({type: String})
    patronus: string;

    @Column({type: Boolean})
    hogwartsStudent: boolean;

    @Column({type: Boolean})
    hogwartsStaff: boolean;

    @Column({type: String})
    actor: string;

    @Column({type: "simple-array"})
    alternate_actors: string[]

    @Column({type: Boolean})
    alive: boolean;

    @Column({type: String})
    image: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updatedAt: Date;

    constructor(entity: Partial<Character>) {
        Object.assign(this, entity);
    }
}
