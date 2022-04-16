import { Client, ClientDB } from "../types/client.ts";

class ClientHelper {
  public static clientInstanced(data: ClientDB): Client {
    try {
      const client: Client = {
        id: data[0],
        name: data[1],
      };
      return client;
    } catch (_error) {
      throw "ID not found";
    }
  }
}

export default ClientHelper;
