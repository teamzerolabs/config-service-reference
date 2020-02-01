import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("Book", { schema: "dbo" })
export class Book {
  @PrimaryGeneratedColumn({
    type: "int"
  })
  id: number;

  @Column("varchar", { length: 100, nullable: false })
  name: string;

  @Column("varchar", { length: 100, nullable: false })
  author: string;

  @Column()
  publishedDate: Date;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateModified: Date;
}
