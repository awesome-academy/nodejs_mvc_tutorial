import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { Genre } from "./Genre";

@Entity("book_genre")
export class GenreBook {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Book, (book) => book.genreBooks)
  @JoinColumn({ name: "book_id" })
  book!: Book;

  @ManyToOne(() => Genre, (genre) => genre.genreBooks)
  @JoinColumn({ name: "genre_id" })
  genre!: Genre;
}
