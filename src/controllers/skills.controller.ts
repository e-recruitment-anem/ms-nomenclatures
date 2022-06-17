import elasticSearchHelper from "../helpers/elastic-search.helper";
import { NextFunction, Request, Response } from "express";

const addSkill = async (req: Request, res: Response, next: NextFunction) => {
  const { id, label } = req.body;
  const resss = await elasticSearchHelper.setItem("skills", {
    id,
    label,
  });
  res
    .status(200)
    .send({ message: "label added successfully,", body: { res: resss } });
};

const getSkills = async (req: Request, res: Response, next: NextFunction) => {
  const { label } = req.query;
  const { hits } = await elasticSearchHelper.getItems(
    "skills",
    "label",
    String(label)
  );
  console.log(hits);

  res.status(200).send({ message: "items found", body: { ...hits } });
};

const getSkillsByIds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ids } = req.body;
  const resss = await elasticSearchHelper.getItemsByIds("skills", [...ids]);
  console.log(resss);

  res.status(200).send({ message: "item found", body: resss });
};
export default { addSkill, getSkills, getSkillsByIds };
