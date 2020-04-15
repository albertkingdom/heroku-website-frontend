const mysql = require("mysql");
const bluebird = require("bluebird");

const db = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "todolist",
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "bad362786345d6",
  password: "00c6a2d7",
  database: "heroku_2a125441f8e62f0",
  // for MAC PC USE
  // socketPath: "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock"
});
db.on("error", event => {
  console.log(event);
});
db.connect();

bluebird.promisifyAll(db);

module.exports = db;
