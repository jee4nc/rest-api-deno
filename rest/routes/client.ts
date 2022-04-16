import { Router } from "../../deps.ts";
import ClientController from "../controllers/client.ts";

const router = new Router();

router.get("/client", ClientController.getClients);
router.get("/client/:id", ClientController.getClientById);

export default router;
