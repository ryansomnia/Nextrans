
const mysql = require("mysql2/promise");

let conn = {
  query: async (qry) => {
    let createConnect = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'L2HYTo237!',
        database: 'nextrans'
    });

   await createConnect.connect(function (err) {
      if (err) {
        throw err;
      } else {
        console.log("Connected!");
      }
    });

    const [rows, fields] = await createConnect.query(qry);
    return rows;
  },
};
module.exports = conn;
