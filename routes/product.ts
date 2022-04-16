import { Router } from "../deps.ts";

const router = new Router();

router.get("/product", (ctx) => {
  const bodyText = "Hello World! from product";
  ctx.response.body = bodyText;
});

export default router;
