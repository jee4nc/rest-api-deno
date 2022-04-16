import pool from "../lib/dbConnection.ts";

class ClientService {
  public static async getClientById(id: number): Promise<any> {
    try {
      const db = await pool.connect();
      const data = await db.queryArray(
        `SELECT * FROM app_user WHERE id = ${id}`
      );
      db.release();
      return data.rows[0];
    } catch (_error) {
      throw "Internal Server Error";
    }
  }
}

export default ClientService;
