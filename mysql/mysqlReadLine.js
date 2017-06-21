/**
 * Created by Richard on 21.06.2017.
 */

const mysql = require('mysql'),
  readLine = require('readline'),
  util = require('util');

class MysqlReadLine {
  constructor (databaseOptions, readLineOptions) {
    this.dbOptions = databaseOptions;
    this.readLineOptions = readLineOptions;
    this.console = console;
    this.console.log(this.constructor.name + " created");
  }

  run () {
    this.rl = readLine.createInterface(this.readLineOptions);
    this.con = mysql.createConnection(this.dbOptions);
    this.con.connect((err) => {
      this.onConnect(err);
    });
  }

  onConnect (err) {
    if (err) {
      throw err;
    }
    this.console.log("Connected!");
    this.rl.on('line', (line) => {
      this.onReadLine(line);
    });
  }

  onReadLine (line) {
    this.runQuery(line);
  }

  runQuery (line) {
    this.con.query(line, (err, result) => {
      this.onQuery(err, result);
    });
  }

  onQuery (err, result) {
    if (err) {
      this.onQueryError(err);
    }
    this.onQuerySuccess(result);
  }

  onQueryError (err) {
    this.console.error(err);
  }

  onQuerySuccess (result) {
    this.console.log("Result: %s", util.inspect(result));
  }

}

module.exports = MysqlReadLine;
