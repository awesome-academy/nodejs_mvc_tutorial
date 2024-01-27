import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { Author } from "../models/database/Author";
import { AppDataSource } from "../data-source";

const authorList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authors = await AppDataSource.getRepository(Author).find({
      order: {
        familyName: "ASC",
      },
    });

    console.log(authors);

    res.render("authors/index", {
      authors,
      title: req.t("authors.index.title"),
    });
  }
);

const authorDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Author detail");
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
