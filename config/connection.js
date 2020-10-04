// Connectiong configuration
require("dotenv").config();

// Set up MySQL connection.
var mysql = require("mysql");

//Set up JAWS DB
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: process.env.DB_USERNAME,

    // Your password
    password: process.env.DB_PASSWORD,

    //your database
    database: process.env.DB_DATABASE,
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
