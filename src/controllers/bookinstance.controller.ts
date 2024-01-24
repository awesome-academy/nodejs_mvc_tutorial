import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const bookInstanceList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("bookInstance list");
  }
);

const bookInstanceDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("bookInstance detail");
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
