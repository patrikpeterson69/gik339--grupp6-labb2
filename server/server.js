const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const server = express();

// Middleware för CORS och request parsing
server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

// Endpoint för att hämta alla users
server.get("/users", (req, res) => {
  const db = new sqlite3.Database("./server/gik339-labb2.db"); // Öppna databas

  db.all("SELECT * FROM USERS", (err, rows) => {
    if (err) {
      res.status(500).send({ error: "Databasfel", details: err.message });
    } else {
      res.send(rows); // Skicka tillbaka resultatet i JSON-format
    }
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/users");
});

console.log("Lite output");
