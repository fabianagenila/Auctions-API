import { connection } from "../data/connection";
import { auction } from "../model/auction";

export const selectAllAuctions = async (): Promise<any> => {
  try {
    const [result]: auction[] = await connection.raw(`
        SELECT *,
        DATE_FORMAT(expiration_date, "%d/%m/%Y") AS expirationDate
        FROM auction;
    `);

    return result;
  } catch (err) {
    throw new Error(err.sqlMessage || err.message);
  }
};
