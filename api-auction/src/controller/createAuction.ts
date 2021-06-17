import { Request, Response } from "express";
import { createAuctionBusiness } from "../business/createAuctionBusiness";

export const createAuction = async (
   req: Request,
   res: Response
) => {
   try {

      const { 
         title, 
         description, 
         author, 
         initial_value, 
         bid_progression, 
         expiration_date, 
         bid_value
      } = req.body

      await createAuctionBusiness({
         title, 
         description, 
         author, 
         initial_value, 
         bid_progression, 
         expiration_date, 
         bid_value
      })

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}