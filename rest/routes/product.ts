import { Router } from "../../deps.ts";
import ProductController from "../controllers/product.ts";

const router = new Router();

router.get("/product", ProductController.getProducts);

export default router;
