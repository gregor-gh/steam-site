import sql from "mssql";

const pool = new sql.ConnectionPool({
  user: "sa",
  password: "Passw@rd",
  server: "localhost",
  //database: "test",
  options: {
    trustServerCertificate: true,
  },
});

const test = async () => {
  try {
    await pool.connect();
    const data = await pool.query("create database test2");
    console.log(data)
  } catch (err) {
    console.error(err);
  }
};

export async function insertSteamSpyTopGamesTwoWeeks(topGames: SteamSpyGameList[]) {
  // insert to db
}

test();
