import sql from "mssql"

const pool = new sql.ConnectionPool({
  user: "sa",
  "password": "Passw@rd",
  server: "localhost",
  database: "steamdb"
});

const test = async () => {
  try {
    await pool.connect();
    const data = await pool.query("select * from sys.databases")
  } catch (err) {
    console.error(err)
  }
}

test();