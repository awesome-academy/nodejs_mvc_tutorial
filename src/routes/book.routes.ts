import express from "express";
import * as bookController from "../controllers/book.controller";

const router = express.Router();

router.get("/", bookController.bookList);
router.get("/:id", bookController.bookDetail);
router.get("/new", bookController.bookNew);
router.post("/create", bookController.bookCreate);
router.get("/:id/edit", bookController.bookEdit);
router.put("/:id/update", bookController.bookUpdate);
router.delete("/:id/delete", bookController.bookDelete);

export default router;
