const { Pool } = require("pg");

const pool = new Pool({
  user: "your_user", // Replace with your PostgreSQL username
  host: "127.0.0.1", // Use IPv4 explicitly
  database: "your_database", // Replace with your database name
  password: "your_password", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;