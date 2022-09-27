import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Beer {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  taste: string;

  @Column({nullable: true})
  filename: string;
}