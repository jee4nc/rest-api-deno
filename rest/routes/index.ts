import type { Application } from "../../deps.ts";
import productRouter from "./product.ts";
import clientRouter from "./client.ts";

const init = (app: Application) => {
  app.use(clientRouter.routes());
  app.use(productRouter.routes());

  app.use(clientRouter.allowedMethods());
  app.use(productRouter.allowedMethods());
};

export default {
  init,
};
