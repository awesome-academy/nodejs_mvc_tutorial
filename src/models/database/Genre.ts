import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenreBook } from "./GenreBook";

@Entity("genre")
export class Genre {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  get url(): string {
    return `/genres/${this.id}`;
  }

  @OneToMany(() => GenreBook, (genreBook) => genreBook.genre)
  genreBooks!: GenreBook[];

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
