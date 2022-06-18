import elasticSearchHelper from "../helpers/elastic-search.helper";
import { NextFunction, Request, Response } from "express";

const addState = async (req: Request, res: Response, next: NextFunction) => {
  const { id, label, wilaya } = req.body;
  const resss = await elasticSearchHelper.setItem("states", {
    id,
    label,
    wilaya,
  });
  res
    .status(200)
    .send({ message: "label added successfully,", body: { res: resss } });
};

const getStates = async (req: Request, res: Response, next: NextFunction) => {
  const { label } = req.query;
  const hits = await elasticSearchHelper.getItems(
    "states",
    "label",
    String(label)
  );
  console.log(hits);

  res.status(200).send({ message: "items found", body: { ...hits } });
};

const getStateById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const {
    hits: { hits },
  } = await elasticSearchHelper.getItemById("states", Number(id));
  res.status(200).send({ message: "item found", body: { ...hits } });
};
export default { addState, getStates, getStateById };
