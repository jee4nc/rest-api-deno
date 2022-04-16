import { Application } from "./deps.ts";
import router from "./rest/routes/index.ts";

const app = new Application();

// Routes implementation
router.init(app);

app.listen({ port: 8080 });
console.log(`Server running on http://localhost:8080`);
