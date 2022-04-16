import { Context } from "../../deps.ts";
import Service from "../../services/client.ts";

class ClientController {
  public static getClients(ctx: Context): void {
    const bodyText = "Hello World! from client";
    console.log(bodyText);
    ctx.response.body = bodyText;
  }

  public static async getClientById(ctx: any): Promise<void> {
    const id = ctx.params.id;
    const bodyText = await Service.getClientById(parseInt(id));
    ctx.response.body = bodyText;
  }
}

export default ClientController;
