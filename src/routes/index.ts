import express from "express";
import { jobTitlesRouter } from "./job-titles.routes";

const router = express.Router();
router.use("/job-titles", jobTitlesRouter);

export { router as Router };
