/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProfesorEntity } from "src/profesor/profesor.entity/profesor.entity";

@Entity()
export class PropuestaEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    titulo: string;
 
    @Column()
    descripcion: number;

    @Column()
    palabraClave: number;

    @ManyToOne(() => ProfesorEntity, profesor => profesor.propuestas)
    profesor: ProfesorEntity;
}