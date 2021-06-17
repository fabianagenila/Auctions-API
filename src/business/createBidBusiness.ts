import { insertBid } from "../data/insertBid";
import { auctionData } from "../model/auction";

export const createBidBusiness = async (
  auctionData: auctionData,
  id: string
) => {
  if (
    auctionData.bid_value === 0 ||
    auctionData.bid_value <= auctionData.initial_value
  ) {
    throw new Error("O valor do seu lance deve ser acima do valor inicial!");
  }

  if (auctionData.bid_value % auctionData.bid_progression !== 0) {
    throw new Error("O valor deve estar dentro da progressão do leilão");
  }

  await insertBid({ ...auctionData }, id);
};
