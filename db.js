import pg from 'pg';

const Pool = pg.Pool;
const pool = new Pool({
  user: "postgres",
  password: "d3146784",
  host: "localhost",
  port: 5432,
  database: "sneaker_shop"
})

export default pool;
