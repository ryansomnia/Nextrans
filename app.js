const express = require('express');
// const axios = require('axios');
const app = express();
const port = 3000;
// const supplierAPI = 'https://fakestoreapi.com';
let orders = [];

app.use(express.json());


const router = require('./router/router');
app.use('/', router);

// GET /inventory
// app.get('/inventory', async (req, res) => {
//   try {
//     const response = await axios.get(`${supplierAPI}/products`);
//     let inventory = response.data;

//     // Sorting Ascending
//     if (req.query.sort === 'ASC') {
//       inventory.sort((a, b) => a.price - b.price);
//     } else if (req.query.sort === 'DESC') {
//       inventory.sort((a, b) => b.price - a.price);
//     }

//     // Filtering (example: filter by category)
//     if (req.query.category) {
//       const filteredCategory = req.query.category.toLowerCase();
//       inventory = inventory.filter((item) =>
//         item.category.toLowerCase().includes(filteredCategory)
//       );
//     }

//     // Check if inventory is empty after filtering
//     if (inventory.length === 0) {
//       return res.status(404).json({ message: 'No items found with the specified filter' });
//     }

//     res.json(inventory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// GET /orders
// app.get('/orders', async (req, res) => {
//   try {
//     res.json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// POST /orders
// app.post('/orders', async (req, res) => {
//   try {
//     const { userId, date, products } = req.body || {};

//     if (!userId || !date || !products) {
//       return res.status(400).json({ error: 'Missing required fields in the request body' });
//     }

//     const order = {
//       id: orders.length + 1,
//       userId: userId,
//       date: date,
//       products: products
//     };

//     orders.push(order);

//     res.status(201).json(order);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
