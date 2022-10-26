const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  database: "mydb",
  port: 3306,
  user: "root",
  password: "admin",
});

// connect.connect(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("MySQL Connected!");
//   }
// });

module.exports = connect;
