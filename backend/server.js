const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'RACHOORI_K',
  password: 'K@rthik@123',
  database: 'ecommerce',
});

app.get('/', (req, res) => {
  return res.json('From Backend Side');
});

app.get('/Customer', (req, res) => {
  const sql = 'SELECT * FROM Customers';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Product', (req, res) => {
  const sql = 'SELECT * FROM Products';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Address', (req, res) => {
  const sql = 'SELECT * FROM Address';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Seller', (req, res) => {
  const sql = 'SELECT * FROM Seller';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Categories', (req, res) => {
  const sql = 'SELECT * FROM Categories';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Reviews', (req, res) => {
  const sql = 'SELECT * FROM Reviews';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Cart', (req, res) => {
  const sql = 'SELECT * FROM Cart';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Wishlist', (req, res) => {
  const sql = 'SELECT * FROM Wishlist';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/WishlistItem', (req, res) => {
  const sql = 'SELECT * FROM WishlistItem';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Payment', (req, res) => {
  const sql = 'SELECT * FROM Payment';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/Order', (req, res) => {
  const sql = 'SELECT * FROM Order';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/OrderItem', (req, res) => {
  const sql = 'SELECT * FROM OrderItem';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.listen(8082, () => {
  console.log('Listening on port 8082');
});
