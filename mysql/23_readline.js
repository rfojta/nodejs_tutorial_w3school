var mysql = require('mysql');
var util = require('util');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var con = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "4z65vbdL2wBcT6Om",
  database: 'nodejs'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*
  var sql = "CREATE TABLE customers2 (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + util.inspect(result));
  });
  */
  rl.on('line', function(line) {
    con.query(line, function(err, result) {
      if(err) console.error(err);
      console.log("Result: %s", util.inspect(result));
    });
  });
});
