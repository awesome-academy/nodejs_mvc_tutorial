import express from "express";
import * as authorController from "../controllers/author.controller";

const router = express.Router();

router.get("", authorController.authorList);
router.get("/:id", authorController.authorDetail);
router.get("/new", authorController.authorNew);
router.post("/create", authorController.authorCreate);
router.get("/:id/edit", authorController.authorEdit);
router.put("/:id/update", authorController.authorUpdate);
router.delete("/:id/delete", authorController.authorDelete);

export default router;
