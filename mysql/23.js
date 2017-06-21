var mysql = require('mysql');
var util = require('util');

var con = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "4z65vbdL2wBcT6Om",
	database: 'nodejs'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers2 (name VARCHAR(255), address VARCHAR(255))";	
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + util.inspect(result));
  });
});
