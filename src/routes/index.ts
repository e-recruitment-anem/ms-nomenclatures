import express from "express";
import { jobTitlesRouter } from "./job-titles.routes";
import { skillsRouter } from "./skills.routes";
import { citiesRouter } from "./cities.routes";
import { statesRouter } from "./states.routes";

const router = express.Router();
router.use("/job-titles", jobTitlesRouter);
router.use("/skills", skillsRouter);
router.use("/cities", citiesRouter);
router.use("/states", statesRouter);

export { router as Router };
