const express = require('express');
const app = express();
var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
//   database : "mydb"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

app.get('/', (req, res) => {
    res.send("Updated");
});

const port = process.env.port || 3010;
app.listen(port, () => {
    console.log("Wazzappppp");
});

connection.end();