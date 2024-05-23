/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { PropuestaEntity } from "src/propuesta/propuesta.entity/propuesta.entity";
import { EstudianteEntity } from "src/estudiante/estudiante.entity/estudiante.entity";

@Entity()
export class ProyectoEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    titulo: string;
 
    @Column()
    descripcion: number;

    @Column()
    palabraClave: number;

    @OneToOne(() => PropuestaEntity)
    @JoinColumn()
    propuesta: PropuestaEntity;

    @OneToOne(() => EstudianteEntity)
    @JoinColumn()
    estudiante: EstudianteEntity;
}