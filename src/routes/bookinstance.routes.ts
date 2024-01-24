import express from "express";
import * as bookInstanceController from "../controllers/bookinstance.controller";

const router = express.Router();

router.get("/", bookInstanceController.bookInstanceList);
router.get("/:id", bookInstanceController.bookInstanceDetail);
router.get("/new", bookInstanceController.bookInstanceNew);
router.post("/create", bookInstanceController.bookInstanceCreate);
router.get("/:id/edit", bookInstanceController.bookInstanceEdit);
router.put("/:id/update", bookInstanceController.bookInstanceUpdate);
router.delete("/:id/delete", bookInstanceController.bookInstanceDelete);

export default router;
