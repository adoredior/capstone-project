const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 5500;
const bodyParser = require('body-parser'); 
const router = require('./customer');
const cors = require('cors')

app.use(bodyParser.json());

app.use(require('./customer'))


// const client = new Client({
//     user: 'postgres',
//     host: 'postgres',
//     database: 'travelhaus_db',
//     password: 'Kecia',
//     port: 5500,
//   });


const pgp = require('pg-promise')();

app.use(cors());
  client.connect();

//   // Create table route
// app.get('/create-table', (req, res) => {
//     const createTableQuery = `
//       CREATE TABLE your_table_name (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) UNIQUE,
//         age INT
//       );`;
  
//     // Execute the CREATE TABLE query
//     client.query(createTableQuery, (err, result) => {
//       if (err) {
//         console.error('Error creating table:', err);
//         res.status(500).send('Error creating table');
//       } else {
//         console.log('Table created successfully');
//         res.send('Table created successfully');
//       }
//     });
//   });
  
  app.listen(port, () => {
    console.log(`Server listening on port 5500`);
  });
  