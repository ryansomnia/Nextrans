// const axios = require('axios');
// const supplierAPI = 'https://fakestoreapi.com';
const connect = require('../config/mysql');

// let data = [];
let orders = {
    createOrder : async (req, res) =>{
        try {
            const { userId, date, productsId, quantity } = req.body;

            let qry = `call nextrans.InsertOrder(${userId}, '${date}', ${productsId}, ${quantity});`
        
            let hasil = await connect.query(qry)
            console.log(hasil);
            if (!userId || !date || !productsId, !quantity) {
              return res.status(400).json({ error: 'Missing required fields in the request body' });
            }
            let response = {
                code :201,
                status: 'created',
                message: `success insert data ${userId}`

            }
        
            res.status(201).json(response);
          } catch (error) {
            let response = {
                code :500,
                status: 'error',
                message: error.message

            }
            console.error(response);
            res.status(response.code).json(response);
          }
},
listOrder: async(req, res)=>{
    try {

        let userId = req.body.userId
        if (!userId) {
            return res.status(400).json({ error: 'Missing required fields in the request body' });
          }

        let qry = `call nextrans.listOrder(${userId});`
        let hasil = await connect.query(qry)
        console.log(hasil);
        
        let response = {
            code :200,
            status: 'success',
            message: hasil

        }
    
        res.status(201).json(response);
      } catch (error) {
        let response = {
            code :500,
            status: 'error',
            message: error.message

        }
        console.error(response);
        res.status(response.code).json(response);
      }
}
}



module.exports = orders;
