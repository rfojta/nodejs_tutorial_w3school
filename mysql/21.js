var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "4z65vbdL2wBcT6Om"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
