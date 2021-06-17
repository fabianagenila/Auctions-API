import { connection } from "../data/connection";

export const selectAuctionById = async (id: string): Promise<any> => {
  const [result] = await connection.raw(`
      SELECT *,
      DATE_FORMAT(expiration_date, "%d/%m/%Y") AS expirationDate,
      DATEDIFF(expiration_date, CURDATE()) AS remainingAuctionDays
      FROM auction
      WHERE id = '${id}';
    `);

  return result;
};
