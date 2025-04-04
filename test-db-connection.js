const pool = require("./database");

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Database connected:", res.rows);
  } catch (err) {
    console.error("Error connecting to the database:", err.stack);
  } finally {
    pool.end();
  }
})();
