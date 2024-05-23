/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne,OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { ProfesorEntity } from "src/profesor/profesor.entity/profesor.entity";
import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";

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

    @OneToOne(() => ProyectoEntity)
    @JoinColumn()
    proyecto: ProyectoEntity;
}