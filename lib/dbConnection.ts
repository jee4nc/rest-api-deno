import { Pool, config } from "../deps.ts";

const env = config();

const pool = new Pool(
  {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    hostname: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
  },
  10,
  true
);

export default pool;
