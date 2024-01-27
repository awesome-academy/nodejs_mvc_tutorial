import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Book } from "./Book";

@Entity("book_instance")
export class BookInstance {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  imprint!: string;

  @Column({
    type: "enum",
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Available",
  })
  status!: "Available" | "Maintenance" | "Loaned" | "Reserved";

  @Column({
    type: "date",
    default: () => "CURRENT_TIMESTAMP",
    name: "due_back",
  })
  dueBack!: Date;

  get url(): string {
    return `/catalog/bookinstances/${this.id}`;
  }

  @ManyToOne(() => Book, (book) => book.bookInstances)
  @JoinColumn({ name: "book_id" })
  book!: Book;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
