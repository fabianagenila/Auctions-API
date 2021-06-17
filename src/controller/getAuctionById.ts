import { Request, Response } from "express";
import { getAuctionByIdBusiness } from "../business/getAuctionByIdBusiness";

export const getAuctionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const auction = await getAuctionByIdBusiness(id);

    res.status(200).send(auction);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
