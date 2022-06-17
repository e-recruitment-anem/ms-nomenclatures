import elasticSearchHelper from "../helpers/elastic-search.helper";
import { NextFunction, Request, Response } from "express";

const addCity = async (req: Request, res: Response, next: NextFunction) => {
  const { id, label } = req.body;
  const resss = await elasticSearchHelper.setItem("cities", {
    id,
    label,
  });
  res
    .status(200)
    .send({ message: "label added successfully,", body: { res: resss } });
};

const getCities = async (req: Request, res: Response, next: NextFunction) => {
  const { label } = req.query;
  const { hits } = await elasticSearchHelper.getItems(
    "cities",
    "label",
    String(label)
  );
  console.log(hits);

  res.status(200).send({ message: "items found", body: { ...hits } });
};

const getCityById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const {
    hits: { hits },
  } = await elasticSearchHelper.getItemById("cities", Number(id));
  res.status(200).send({ message: "item found", body: { ...hits } });
};

export default { addCity, getCities, getCityById };
