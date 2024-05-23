/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { EstudianteEntity } from "src/estudiante/estudiante.entity/estudiante.entity";

@Entity()
export class ProyectoEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    fechaInicio: string;
 
    @Column()
    fechaFin: string;

    @Column()
    URL: string;

    @OneToOne(() => EstudianteEntity)
    @JoinColumn()
    estudiante: EstudianteEntity;
}