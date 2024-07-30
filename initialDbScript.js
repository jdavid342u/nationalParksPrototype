const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./nationalparks.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created users table.");

      db.run(`DELETE FROM users`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from items");

        const values1 = [
          "testuser",
          "testuser@gmail.com",
          "testuser123",
        ];

        const insertSql = `INSERT INTO users(name, email, password) VALUES(?, ?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Rows inserted, ID ${id}`);
        });

        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});
