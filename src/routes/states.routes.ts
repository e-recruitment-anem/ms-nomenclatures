import express from "express";
import { statesController } from "../controllers";

const router = express.Router();
router.post("/", statesController.addState);
router.get("/", statesController.getStates);
router.get("/:id", statesController.getStateById);
export { router as statesRouter };
