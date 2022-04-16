import { Client, ClientDB } from "../types/client.ts";

class ClientHelper {
  public static clientInstanceator(data: ClientDB): Client {
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

  // public static clientByIdInstanceator(data: ClientDB): Client {
  //    const clientData = (await Service.getClientById(id)) as ClientDB;
  //    const client: Client = Helper.clientInstanceator(clientData);
  //    const response = { status: "success", client };
  // }
}

export default ClientHelper;
