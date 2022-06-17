import express from "express";
import { jobTitlesController } from "../controllers";

const router = express.Router();
router.post("/", jobTitlesController.addJobTitle);
router.get("/", jobTitlesController.getJobTitles);
router.get("/:id", jobTitlesController.getJobTitleById);
export { router as jobTitlesRouter };
