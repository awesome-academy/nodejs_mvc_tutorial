import express from "express";
import * as genreController from "../controllers/genre.controller"; // Adjust this if the export is named

const router = express.Router();

router.get("/", genreController.genreList);
router.get("/:id", genreController.genreDetail);
router.get("/new", genreController.genreNew);
router.post("/create", genreController.genreCreate);
router.get("/:id/edit", genreController.genreEdit);
router.put("/:id/update", genreController.genreUpdate);
router.delete("/:id/delete", genreController.genreDelete);

export default router;
