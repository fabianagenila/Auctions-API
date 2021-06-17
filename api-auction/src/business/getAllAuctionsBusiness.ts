import { selectAllAuctions } from "../data/selectAllAuctions";

export const getAllAuctionsBusiness = async () => {
  const result = await selectAllAuctions();

  if (!result) {
    throw new Error("Ocorreu um erro, tente novamente");
  }

  const mappedResult = result.map((re: any) => {
    return {
      id: re.id,
      title: re.title,
      author: re.author,
      description: re.description,
      initialValue: re.initial_value,
      bidProgression: re.bid_progression,
      bidValue: re.bid_value,
      expirationDate: re.expirationDate,
    };
  });

  return mappedResult;
};
