import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Author } from './Author';
import { BookInstance } from './BookInstance';
import { GenreBook } from './GenreBook';

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  title!: string;

  @Column({ type: 'text' })
  summary!: string;

  get url(): string {
    return `/catalog/books/${this.id}`;
  }

  @ManyToOne(() => Author, author => author.books)
  @JoinColumn({ name: 'author_id' }) // If your foreign key column name is author_id
  author!: Author;

  @OneToMany(() => BookInstance, bookInstance => bookInstance.book, { onDelete: 'CASCADE' })
  bookInstances!: BookInstance[];

  @OneToMany(() => GenreBook, genreBook => genreBook.book)
  genreBooks!: GenreBook[];
}
