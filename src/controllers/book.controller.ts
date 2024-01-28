import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { AppDataSource } from "../data-source";
import { Book } from "../models/database/Book";
import { Author } from "../models/database/Author";
import { Genre } from "../models/database/Genre";
import { BookInstance } from "../models/database/BookInstance";
import { bookInstanceStatus } from "../utils/constants";

const bookRepository = AppDataSource.getRepository(Book);
const authorRepository = AppDataSource.getRepository(Author);
const genreRepository = AppDataSource.getRepository(Genre);
const bookInstanceRepository = AppDataSource.getRepository(BookInstance);

const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const [
      numBooks,
      numAuthors,
      numGenres,
      numBookInstances,
      numAvailableBookInstances,
    ] = await Promise.all([
      bookRepository.count(),
      authorRepository.count(),
      genreRepository.count(),
      bookInstanceRepository.count(),
      bookInstanceRepository.count({
        where: { status: "Available" },
      }),
    ]);

    res.render("index", {
      title: "Sun Asterisk",
      message: "Make awesome things that matter",
      numBooks,
      numAuthors,
      numGenres,
      numBookInstances,
      numAvailableBookInstances,
      i18n: res.locals,
    });
  }
);

const bookList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const books = await AppDataSource.getRepository(Book).find({
      order: {
        title: "ASC",
      },
      relations: ["author"],
    });

    res.render("books/index", {
      books,
      title: req.t("books.index.title"),
    });
  }
);

const bookDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      const err = new Error("Invalid book ID parameter");
      res.status(404);
      return next(err);
    }

    const book = await AppDataSource.getRepository(Book).findOne({
      relations: ["author", "genreBooks", "bookInstances", "genreBooks.genre"],
      where: {
        id: id,
      },
    });

    if (book === null) {
      const err = new Error("Book not found");
      res.status(404);
      return next(err);
    }

    res.render("books/show", {
      book,
      bookInstances: book?.bookInstances,
      bookGenres: book?.genreBooks,
      bookInstanceStatuses: bookInstanceStatus,
    });
  }
);

const bookNew = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("book New");
  }
);

const bookCreate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("book create");
  }
);

const bookEdit = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("book Edit");
  }
);

const bookUpdate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("book update");
  }
);

const bookDelete = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("book delete");
  }
);

export {
  index,
  bookList,
  bookDetail,
  bookCreate,
  bookDelete,
  bookUpdate,
  bookNew,
  bookEdit,
};
