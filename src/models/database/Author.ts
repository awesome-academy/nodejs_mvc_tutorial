import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn
} from 'typeorm';
import { Book } from './Book';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  set firstName(name: string) {
    this._firstName = name.charAt(0).toUpperCase() + name.slice(1);
  }
  get firstName() {
    return this._firstName;
  }
  private _firstName!: string;

  @Column({ length: 100 })
  set familyName(name: string) {
    this._familyName = name.charAt(0).toUpperCase() + name.slice(1);
  }
  get familyName() {
    return this._familyName;
  }
  private _familyName!: string;

  @Column('date')
  dateOfBirth!: Date;

  @Column('date')
  dateOfDeath!: Date;

  get fullName() {
    return `${this.firstName} ${this.familyName}`;
  }

  get url() {
    return `/catalog/authors/${this.id}`;
  }

  @OneToMany(() => Book, book => book.author)
  books!: Book[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
