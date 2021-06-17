import { Request, Response } from "express";
import { getAllAuctionsBusiness } from "../business/getAllAuctionsBusiness";
import { auction } from "../model/auction";

export const getAllAuctions = async (
   req: Request,
   res: Response
): Promise <any> => {
   try {

      const auctionResult = await getAllAuctionsBusiness();

      res.status(200).send(auctionResult)

   } catch (error) {
      res.status(400).send(error.message)
   }
}