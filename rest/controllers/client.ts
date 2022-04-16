// deno-lint-ignore-file
import { Context } from "../../deps.ts";
import Service from "../../services/client.ts";
import Helper from "../../helpers/client.ts";
import type { Client } from "../../types/client.ts";
import { responseFormatter } from "../../lib/responseFormatter.ts";

class ClientController {
  public static getClients(ctx: Context): void {
    console.log(ctx);
    const bodyText = "Hello World! from client";
    console.log(bodyText);
    ctx.response.body = bodyText;
  }

  public static async getClientById(ctx: any): Promise<void> {
    try {
      const id = ctx.params.id;
      const clientData = await Service.getClientById(parseInt(id));
      const client: Client = Helper.clientInstanced(clientData);
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
