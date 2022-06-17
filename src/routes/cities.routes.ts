import express from "express";
import { citiesController } from "../controllers";

const router = express.Router();
router.post("/", citiesController.addCity);
router.get("/", citiesController.getCities);
router.get("/:id", citiesController.getCityById);
export { router as citiesRouter };
