import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { AppDataSource } from "../data-source";
import { Genre } from "../models/database/Genre";

const genreRepository = AppDataSource.getRepository(Genre);

const genreList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const genres = await genreRepository.find({
      order: {
        name: "ASC",
      },
    });

    res.render("genres/index", {
      genres,
      title: req.t("genres.index.title"),
    });
  }
);

const genreDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      const err = new Error("Invalid genre ID parameter");
      res.status(404);
      return next(err);
    }

    const genre = await genreRepository.findOne({
      relations: ["genreBooks", "genreBooks.book"],
      where: {
        id: id,
      },
    });

    if (genre === null) {
      const err = new Error("Genre not found");
      res.status(404);
      return next(err);
    }

    res.render("genres/show", {
      genre,
      books: genre?.genreBooks,
      title: req.t("genres.show.title"),
    });
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
