import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { Author } from "../models/database/Author";
import { AppDataSource } from "../data-source";

const authorRepository = AppDataSource.getRepository(Author);

const authorList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authors = await authorRepository.find({
      order: {
        familyName: "ASC",
      },
    });

    res.render("authors/index", {
      authors,
      title: req.t("authors.index.title"),
    });
  }
);

const authorDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    var id = parseInt(req.params.id);
    if (isNaN(id)) {
      const err = new Error("Invalid author ID parameter");
      res.status(404);
      return next(err);
    }

    const author = await authorRepository.findOne({
      relations: ["books"],
      where: {
        id: id,
      },
    });

    if (author === null) {
      const err = new Error("Author not found");
      res.status(404);
      return next(err);
    }

    res.render("authors/show", {
      author,
      books: author?.books,
    });
  }
);

const authorNew = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Author New");
  }
);

const authorCreate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Author create");
  }
);

const authorEdit = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Author Edit");
  }
);

const authorUpdate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Author update");
  }
);

const authorDelete = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Author delete");
  }
);

export {
  authorList,
  authorDetail,
  authorCreate,
  authorDelete,
  authorUpdate,
  authorNew,
  authorEdit,
};
