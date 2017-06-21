const MysqlReadLine = require('./mysqlReadLine');

var dbOptions = {
    'database': 'nodejs',
    "host": "localhost",
    "password": "4z65vbdL2wBcT6Om",
    "user": "nodejs"
  },
  rlOptions = {
    "input": process.stdin,
    "output": process.stdout,
    "terminal": false
  };

(new MysqlReadLine(dbOptions, rlOptions)).run();
