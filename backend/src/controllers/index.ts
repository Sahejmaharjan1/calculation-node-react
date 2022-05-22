import { Request, Response } from "express";
import CalculationModel from "../models/CalculationModel";
import { add } from "../utils";

export const findAll = async (req: Request, res: Response) => {
  try {
    const calculations = await CalculationModel.find({});
    res.send(calculations);
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while retrieving Calculations",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  const first_input: number = req.body.a as unknown as number;
  const second_input: number = req.body.b as unknown as number;
  const result = add(first_input, second_input);
  try {
    const CalculationDoc = await CalculationModel.create({
      first: first_input,
      second: second_input,
      sum: result,
    });
    await CalculationDoc.save();
    res.send(
      JSON.stringify({ result, message: "Calculation created successfully" })
    );
  } catch (error) {
    res.status(500).send(error);
  }
};
