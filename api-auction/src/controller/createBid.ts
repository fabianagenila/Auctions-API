import { Request, Response } from "express";
import { createBidBusiness } from "../business/createBidBusiness";

export const createBid = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      author,
      bid_value,
      bid_progression,
      initial_value,
      expiration_date,
    } = req.body;

    const bidValues = await createBidBusiness(
      {
        title,
        description,
        author,
        bid_value,
        bid_progression,
        initial_value,
        expiration_date,
      },
      id
    );

    res.status(201).send({
      bidValues,
      message: "Lance efetuado com sucesso!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
