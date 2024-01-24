import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { GenreBook } from "./GenreBook";

@Entity("genre")
export class Genre {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  get url(): string {
    return `/catalog/genres/${this.id}`;
  }

  @OneToMany(() => GenreBook, (genreBook) => genreBook.genre)
  genreBooks!: GenreBook[];
}
