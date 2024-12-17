const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const server = express();

// Middleware för CORS och request parsing
server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

  server.get('/users', (req, res) => {
    
    const db = new sqlite3.Database("./server/gik339-labb2.db");
    const sql = 'SELECT * FROM users';

    db.all(sql, (err, rows) => {
      if (err) {
        console.error("Fel vid SQL-fråga:", err.message);
        res.status(500).send({ error: 'Databasfel', details: err.message });
      } else {
        console.log("Data från SQL-fråga:", rows); // Logga resultatet
        res.send(rows);
      }
      db.close();
    });
  });
  

// Starta servern
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

