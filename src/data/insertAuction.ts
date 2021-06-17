import { connection } from "./connection";
import { auction } from "../model/auction";

export const insertAuction = async (auction: auction) => {
  await connection("auction").insert({
    id: auction.id,
    title: auction.title,
    author: auction.author,
    description: auction.description,
    initial_value: auction.initial_value,
    bid_progression: auction.bid_progression,
    expiration_date: auction.expiration_date,
  });
};
