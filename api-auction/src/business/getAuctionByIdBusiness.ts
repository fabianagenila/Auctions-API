import { selectAuctionById } from "../data/selectAuctionById";
import { auction } from "../model/auction";

export const getAuctionByIdBusiness = async (id: string) => {
  const result = await selectAuctionById(id);

  if (!result) {
    throw new Error("Leilão não encontrado");
  }

  const mappedResult: auction[] = result.map((re: any) => {
    return {
      id: re.id,
      title: re.title,
      author: re.author,
      description: re.description,
      initialValue: re.initial_value,
      bidProgression: re.bid_progression,
      currentBidValue: re.bid_value,
      expirationDate: re.expirationDate,
      remainingAuctionDays: re.remainingAuctionDays,
    };
  });

  return mappedResult;
};
