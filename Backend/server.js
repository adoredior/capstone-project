const express = require('express');
const app = express();
const port = 5501;
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise')();

app.use(bodyParser.json());
app.use(cors());

const connection = {
  user: 'postgres',
  host: 'localhost',
  database: 'travelhaus_db',
  password: 'kecia',
  port: 5432,
  allowExitOnIdle: true
};

const db = pgp(connection);

db.connect()
  .then(() => {
    console.log('Database connected successfully');
    startServer();
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

function startServer() {
  app.get('/', async (req, res) => {
    try {
      const results = await db.query('SELECT * FROM public.travhaus_users');
      res.send(results);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}