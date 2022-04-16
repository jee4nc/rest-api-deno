import { Router } from "../deps.ts";
import Service from "../services/client.ts";
import Helper from "../helpers/client.ts";
import type { Client, ClientDB } from "../types/client.ts";
import { responseFormatter } from "../lib/responseFormatter.ts";

const router = new Router();

router.get("/client", (ctx) => {
  const bodyText = "Hello World! from client";
  ctx.response.body = bodyText;
});

router.get("/client/:id", async (ctx) => {
  try {
    const id = parseInt(ctx.params.id);
    const clientData = (await Service.getClientById(id)) as ClientDB;
    const client: Client = Helper.clientInstanceator(clientData);
    const response = { status: "success", client };
    responseFormatter(ctx, response, 200, "application/json");
  } catch (error) {
    const response = { status: "error", message: error };
    responseFormatter(ctx, response, 500, "application/json");
  }
});

export default router;
