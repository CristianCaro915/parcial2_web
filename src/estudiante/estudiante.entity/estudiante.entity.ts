/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    nombre: string;
 
    @Column()
    codigo: string;
   
    @Column()
    numCreditos: number;

    @OneToOne(() => ProyectoEntity)
    proyecto: ProyectoEntity;
}
