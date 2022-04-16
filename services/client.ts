import pool from "../lib/dbConnection.ts";

class ClientService {
  public static async getClientById(id: number): Promise<any> {
    const db = await pool.connect();
    const result = await db.queryArray(
      `SELECT * FROM app_user WHERE id = ${id}`
    );
    console.log(result.rows[0]);
    return result.rows[0];
  }
}

export default ClientService;
