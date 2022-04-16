// deno-lint-ignore-file no-explicit-any
import { Context } from "../../deps.ts";
import Service from "../../services/client.ts";
import Helper from "../../helpers/client.ts";
import type { Client, ClientDB } from "../../types/client.ts";
import { responseFormatter } from "../../lib/responseFormatter.ts";

class ClientController {
  public static getClients(ctx: Context): void {
    console.log(ctx.request.url);
    const bodyText = "Hello World! from client";
    console.log(bodyText);
    ctx.response.body = bodyText;
  }

  public static async getClientById(ctx: any): Promise<void> {
    try {
      const id = ctx.params.id;
      const clientData = (await Service.getClientById(
        parseInt(id)
      )) as ClientDB;
      const client: Client = Helper.clientInstanceator(clientData);
      responseFormatter(
        ctx,
        { status: "success", client },
        200,
        "application/json"
      );
    } catch (error) {
      responseFormatter(
        ctx,
        { status: "error", message: error },
        500,
        "application/json"
      );
    }
  }
}

export default ClientController;
