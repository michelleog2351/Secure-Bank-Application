var mysql = require("mysql2");
const bcrypt = require("bcryptjs"); 

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

  // Generate salt and hash the password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;

    // hash the password with generated salt
    bcrypt.hash(password, salt, (err, hashedPassword) => {
      if (err) throw err;

      // hashed password and salt entered into the query before insertion into db
      const query = `INSERT INTO customer (first_name, last_name, email, phone_no, username, password_hash, salt, balance) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

      connection.query(
        query,
        [
          first_name,
          last_name,
          email,
          phone_no,
          username,
          hashedPassword,
          salt,
          balance,
        ],
        function (err, rows, fields) {
          if (err) {
            res.status(500).send("Error creating account, please try again...");
            return;
          }

          res.send("Account successfully created" + rows.insertId);
        }
      );
    });
  });
};

var mysql = require("mysql2");
const bcrypt = require("bcryptjs"); 

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

  // Generate salt and hash the password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;

    // hash the password with generated salt
    bcrypt.hash(password, salt, (err, hashedPassword) => {
      if (err) throw err;

      // hashed password and salt entered into the query before insertion into db
      const query = `INSERT INTO customer (first_name, last_name, email, phone_no, username, password_hash, salt, balance) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

      connection.query(
        query,
        [
          first_name,
          last_name,
          email,
          phone_no,
          username,
          hashedPassword,
          salt,
          balance = 0.00,
        ],
        function (err, rows, fields) {
          if (err) {
            res.status(500).send("Error creating account, please try again...");
            return;
          }

          res.send("Account successfully created" + rows.insertId);
        }
      );
    });
  });
};

exports.loginCustomer = function (req, res) {
  const { loginEmail, loginPassword } = req.body;

  const query = `SELECT password_hash, salt FROM customer WHERE email = ?`;

  connection.query(query, [loginEmail], function (err, rows, fields) {
    if (err) {
      res.status(500).send("Error logging into account, please try again...");
      return;
    }

    if (rows.length > 0) {
      const savedSalt = rows[0].salt;
      const savedPasswordHash = rows[0].password_hash;

      // Hash the entered password with the saved salt
      bcrypt.hash(loginPassword, savedSalt, (err, hashedLoginAttempt) => {
        if (err) {
          res.status(500).send("Error verifying password.");
          return;
        }

        // Compare hashed attempt with the stored hash
        if (hashedLoginAttempt === savedPasswordHash) {
          res.send("Login successful!");
        } else {
          res.status(401).send("Invalid email or password.");
        }
      });
    } else {
      res.status(401).send("Invalid email or password.");
    }
  });
};

