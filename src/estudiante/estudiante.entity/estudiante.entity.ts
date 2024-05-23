/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

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
}
