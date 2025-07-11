const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DBLT_USER,
  password: process.env.DBLT_PASSWORD,
  host: process.env.DBLT_HOST,
  port: process.env.DBLT_PORT,
  database: process.env.DBLT_DATABASE,
  //database: lasttodo, // local
});

module.exports = pool;
