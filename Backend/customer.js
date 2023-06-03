const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const db =pgp('postgres://kb:@127.0.0.1:5432/travelhaus_db');


// Find a customer by ID
router.get('/travelhaus_users/:id', (req, res) => {
  const customer_id = req.params.id;
  db.oneOrNone('SELECT * FROM customers WHERE id = $1', [customer_id])
    .then((customer) => {
      if (customer) {
        res.status(200).json(customer);
      } else {
        res.status(404).json({ message: 'Customer not found.' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error finding customer.' });
    });
});



// Add a new customer to the database
router.post('/travelhaus_users', (req, res) => {
  const { username, name, email, phone, password } = req.body;
  db.one('INSERT INTO customers (username, name, email, phone, password) VALUES ($1, $2, $3, $4, $5) RETURNING id', [username, name, email, phone, password])
    .then((result) => {
      res.status(201).json({ message: 'Customer added successfully.', customer_id: result.id });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error adding customer.' });
    });
});



// Update a customer's profile
router.put('/travelhaus_users/:customer_id', (req, res) => {
  const customerId = req.params.customer_id;
  const { username, name, email, phone, password } = req.body;
  db.none('UPDATE customers SET username = $1, name = $2, phone = $3, email = $4, password = $5 WHERE id = $6', [username, name, phone, email, password, customerId])
    .then(() => {
      res.status(200).json({ message: 'Customer profile updated successfully.' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error updating customer profile.' });
    });
});


/// Remove a customer who has discontinued service
router.delete('/travelhaus_users/:customer_id', (req, res) => {
  const id = req.params.customer_id;
  db.none('DELETE FROM customers WHERE id = $1', [id])
    .then(() => {
      res.status(200).json({ message: 'Customer removed successfully.' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error removing customer.' });
    });
});


module.exports = router
