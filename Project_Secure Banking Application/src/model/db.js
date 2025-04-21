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

exports.registerAccount = function (req, res) {
  const {
    first_name,
    last_name,
    email,
    phone_no,
    username,
    password,
    balance,
  } = req.body;

  const query = `INSERT INTO customer (first_name, last_name, email, phone_no, username, password, balance) VALUES (?, ?, ?, ?, ?, ?, ?);
`;
  connection.query(
    query,
    [first_name, last_name, email, phone_no, username, password, balance],
    function (err, rows, fields) {
      if (err) {
        res.status(500).send("Error creating account, please try again...");
        res.send(JSON.stringify(rows));
        return;
      }

      res.send("Account successfully created for: " + accountNo);
    }
  );
};

exports.loginCustomer = function (req, res) {
  const { loginEmail, loginPassword } = req.body;

  const query = `SELECT * FROM customer WHERE email = ? AND password = ?`;
  connection.query(
    query,
    [loginEmail, loginPassword],
    function (err, rows, fields) {
      if (err) {
        res.status(500).send("Error logging into account, please try again...");
        return;
      }

      if (rows.length > 0) {
        res.send("Login successful for: " + loginEmail);
      } else {
        res.status(401).send("Invalid email or password");
      }
    }
  );
};
