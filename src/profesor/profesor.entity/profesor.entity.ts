/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PropuestaEntity } from "src/propuesta/propuesta.entity/propuesta.entity";

@Entity()
export class ProfesorEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    nombre: string;
 
    @Column()
    cedula: number;

    @Column()
    numExtension: number;
    
    @Column()
    grupoInvestigacion: string;
   
    @OneToMany(() => PropuestaEntity, propuesta => propuesta.profesor)
    propuestas: PropuestaEntity[];
}