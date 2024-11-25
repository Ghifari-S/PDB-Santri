import { Pool } from "pg";


const pool = new Pool({
  user: "postgres.tzashesuduvqrqilwyge",
  host: "aws-0-ap-southeast-1.pooler.supabase.com",
  database: "postgres",
  password: "a9EjWEkcehmve9X6",
  port: 6543,
  // ssl: { rejectUnauthorized: false }
});

export default pool;

// npm i --save-dev @types/pg