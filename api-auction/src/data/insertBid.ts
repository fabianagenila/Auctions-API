import { connection } from "./connection";
import { auction, auctionData } from "../model/auction";

export const insertBid = async (
   auctionData: auctionData,
   id: string
) => {

   try {

   await connection('auction')
      .update({bid_value: auctionData.bid_value})
      .where({id: id})
      
   } catch (err) {
      throw new Error(err.sqlMessage || err.message);
   }
}