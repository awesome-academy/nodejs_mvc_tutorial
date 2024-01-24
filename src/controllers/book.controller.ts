import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Home page");
  }
);

const bookList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("book list");
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
