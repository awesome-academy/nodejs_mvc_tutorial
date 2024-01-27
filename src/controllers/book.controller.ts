import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { AppDataSource } from "../data-source";
import { Book } from "../models/database/Book";
import { Author } from "../models/database/Author";
import { Genre } from "../models/database/Genre";
import { BookInstance } from "../models/database/BookInstance";

const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const [
      numBooks,
      numAuthors,
      numGenres,
      numBookInstances,
      numAvailableBookInstances,
    ] = await Promise.all([
      AppDataSource.getRepository(Book).count(),
      AppDataSource.getRepository(Author).count(),
      AppDataSource.getRepository(Genre).count(),
      AppDataSource.getRepository(BookInstance).count(),
      AppDataSource.getRepository(BookInstance).count({
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
    res.send(`Book detail ${req.params.id}`);
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
