import { Router } from "../../deps.ts";
import ProductController from "../controllers/product.ts";

const router = new Router();

router.get("/product", ProductController.hola);

export default router;
