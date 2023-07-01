const axios = require('axios');
const supplierAPI = 'https://fakestoreapi.com';
let orders = [];
let inventory = {
    listInventory : async (req, res) =>{
        try {
            const response = await axios.get(`${supplierAPI}/products`);
            let inventory = response.data;
        
            // Sorting Ascending
            if (req.query.sort === 'ASC') {
              inventory.sort((a, b) => a.price - b.price);
            } else if (req.query.sort === 'DESC') {
              inventory.sort((a, b) => b.price - a.price);
            }
        
            // Filtering (example: filter by category)
            if (req.query.category) {
              const filteredCategory = req.query.category.toLowerCase();
              inventory = inventory.filter((item) =>
                item.category.toLowerCase().includes(filteredCategory)
              );
            }
        
            // Check if inventory is empty after filtering
            if (inventory.length === 0) {
              return res.status(404).json({ message: 'No items found with the specified filter' });
            }
        
            res.json(inventory);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
}
}



module.exports = inventory;
