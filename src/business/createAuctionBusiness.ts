import { insertAuction } from "../data/insertAuction";
import { generateId } from "../services/idGenerator";
import { auctionData } from "../model/auction";

export const createAuctionBusiness = async (auctionData: auctionData) => {
  if (
    !auctionData.title ||
    !auctionData.description ||
    !auctionData.initial_value ||
    !auctionData.bid_progression ||
    !auctionData.expiration_date
  ) {
    throw new Error(
      '"title", "description", "initial_value", "bid_progression" e "expiration_date" são obrigatórios'
    );
  }

  const id: string = generateId();

  await insertAuction({
    id,
    ...auctionData,
  });
};
