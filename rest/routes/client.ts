import { Router } from "../../deps.ts";
import ClientController from "../controllers/client.ts";

const router = new Router();

router.get("/client", ClientController.hola);

export default router;
