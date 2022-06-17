import express from "express";
import { jobTitlesRouter } from "./job-titles.routes";
import { skillsRouter } from "./skills.routes";

const router = express.Router();
router.use("/job-titles", jobTitlesRouter);
router.use("/skills", skillsRouter);

export { router as Router };
