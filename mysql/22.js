var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "4z65vbdL2wBcT6Om",
	database: 'nodejs'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  sql = 'show tables';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
