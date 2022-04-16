import { Context } from "../../deps.ts";

class ClientController {
  public static getClients(ctx: Context): void {
    const bodyText = "Hello World! from client";
    console.log(bodyText);
    ctx.response.body = bodyText;
  }
}

export default ClientController;
