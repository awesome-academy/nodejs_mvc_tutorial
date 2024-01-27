import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { AppDataSource } from "../data-source";
import { Genre } from "../models/database/Genre";

const genreList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const genres = await AppDataSource.getRepository(Genre).find({
      order: {
        name: "ASC",
      },
    });

    console.log(genres);

    res.render("genres/index", {
      genres,
      title: req.t("genres.index.title"),
    });
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
