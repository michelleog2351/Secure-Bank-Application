var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bank_system",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Successfully connected to MySQL database bank_system`);
});

exports.createAccount = function (req, res) {
  connection.query("SELECT * FROM customer", function (err, rows, fields) {
    if (err) throw err;

    res.send(JSON.stringify(rows));
  });
};

