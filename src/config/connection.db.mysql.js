const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
const pool = mysql.createPool(db);
pool.query("SELECT * FROM programming_languages", (err, results, fields) => {
  console.log(err);
  // console.log(fields);
  // console.table(results);
});
module.exports = pool;
