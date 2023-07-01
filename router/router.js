const express = require('express');
const inventory = require('../controller/inventory');
const orders = require('../controller/orders');

const router = express.Router();


// Inventory
router.get('/inventory/listInventory', inventory.listInventory);

// Orders
router.post('/orders/listOrder', orders.listOrder);
router.post('/orders/createOrder', orders.createOrder);


module.exports = router;
