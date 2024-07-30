import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export async function GET(req, res) {
  if (!db) {
    db = await open({
      filename: "./nationalparks.db",
      driver: sqlite3.Database,
    });
  }

  let queries = req.url.split("?")[1].split("&")
  let email = queries[0].split("=")[1];
  let password = queries[1].split("=")[1];;

  //SELECT used in login for checking if user-input credentials are found in DB  
  const items = await db.all(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`);

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function POST(req, res) {
  if (!db) {
    db = await open({
      filename: "./nationalparks.db",
      driver: sqlite3.Database,
    });
  }
  
  let queries = req.url.split("?")[1].split("&")
  let name = queries[0].split("=")[1];
  name = name.replace("%20", " ");
  let email = queries[1].split("=")[1];
  let pw = queries[2].split("=")[1];;

  //INSERT used in case of successful registrartion
  const items = await db.run(`INSERT INTO users(name, email, password) VALUES('${name}', '${email}', '${pw}')`);

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}