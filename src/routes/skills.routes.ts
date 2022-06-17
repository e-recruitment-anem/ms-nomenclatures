import express from "express";
import { skillsController } from "../controllers";

const router = express.Router();
router.post("/", skillsController.addSkill);
router.get("/", skillsController.getSkills);
router.post("/group", skillsController.getSkillsByIds);
export { router as skillsRouter };
