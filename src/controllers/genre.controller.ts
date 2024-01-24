import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const genreList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("genre list");
  }
);

const genreDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`genre detail ${req.params.id}`);
  }
);

const genreNew = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("genre New");
  }
);

const genreCreate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("genre create");
  }
);

const genreEdit = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("genre Edit");
  }
);

const genreUpdate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("genre update");
  }
);

const genreDelete = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("genre delete");
  }
);

export {
  genreList,
  genreDetail,
  genreCreate,
  genreDelete,
  genreUpdate,
  genreNew,
  genreEdit,
};
