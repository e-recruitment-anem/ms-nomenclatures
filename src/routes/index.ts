import express from "express";
import { jobTitlesRouter } from "./job-titles.routes";
import { skillsRouter } from "./skills.routes";
import { citiesRouter } from "./cities.routes";

const router = express.Router();
router.use("/job-titles", jobTitlesRouter);
router.use("/skills", skillsRouter);
router.use("/cities", citiesRouter);

export { router as Router };
