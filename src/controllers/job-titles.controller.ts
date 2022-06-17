import elasticSearchHelper from "../helpers/elastic-search.helper";
import { NextFunction, Request, Response } from "express";

const addJobTitle = async (req: Request, res: Response, next: NextFunction) => {
  const { id, label } = req.body;
  const resss = await elasticSearchHelper.setItem("job-titles", {
    id,
    label,
  });
  res
    .status(200)
    .send({ message: "label added successfully,", body: { res: resss } });
};

const getJobTitles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { label } = req.query;
  const { hits } = await elasticSearchHelper.getItems(
    "job-titles",
    String(label)
  );
  console.log(hits);

  res.status(200).send({ message: "items found", body: { ...hits } });
};

const getJobTitleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const {
    hits: { hits },
  } = await elasticSearchHelper.getItemById("job-titles", Number(id));
  res.status(200).send({ message: "item found", body: { ...hits } });
};
export default { addJobTitle, getJobTitles, getJobTitleById };
