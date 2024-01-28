import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { AppDataSource } from "../data-source";
import { BookInstance } from "../models/database/BookInstance";
import { bookInstanceStatus } from "../utils/constants";

const bookInstanceRepository = AppDataSource.getRepository(BookInstance);

const bookInstanceList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const bookInstances = await bookInstanceRepository.find({
      order: {
        book: {
          title: "ASC",
        },
      },
      relations: ["book"],
    });

    res.render("book_instances/index", {
      bookInstances,
      title: req.t("book_instances.index.title"),
    });
  }
);

const bookInstanceDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      const err = new Error("Invalid book instance ID parameter");
      res.status(404);
      return next(err);
    }

    const bookInstance = await AppDataSource.getRepository(
      BookInstance
    ).findOne({
      relations: ["book"],
      where: {
        id: id,
      },
    });

    if (bookInstance === null) {
      const err = new Error("Book instance not found");
      res.status(404);
      return next(err);
    }

    res.render("book_instances/show", {
      bookInstance: bookInstance,
      book: bookInstance?.book,
      bookInstanceStatuses: bookInstanceStatus,
    });
  }
);

const bookInstanceNew = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("bookInstance New");
  }
);

const bookInstanceCreate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("bookInstance create");
  }
);

const bookInstanceEdit = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("bookInstance Edit");
  }
);

const bookInstanceUpdate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("bookInstance update");
  }
);

const bookInstanceDelete = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("bookInstance delete");
  }
);

export {
  bookInstanceList,
  bookInstanceDetail,
  bookInstanceCreate,
  bookInstanceDelete,
  bookInstanceUpdate,
  bookInstanceNew,
  bookInstanceEdit,
};
