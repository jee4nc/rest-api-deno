import { Context } from "../../deps.ts";

class ProductController {
  public static hola(ctx: Context): void {
    const bodyText = "Hello World! from product";
    console.log(bodyText);
    ctx.response.body = bodyText;
  }
}

export default ProductController;
