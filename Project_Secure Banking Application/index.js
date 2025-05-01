var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var db = require("./src/model/db.js");

var app = express();

app.use(cors());
app.use(express.static("public")); //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", function (req, res) {
  db.registerAccount(req, res);
});

app.post("/login", function (req, res) {
  db.loginCustomer(req, res);
  console.log(req.body);
});

app.post("/balance", (req, res) => {
  const { accountNo } = req.body;
  db.getBalance(accountNo, (err, balance) => {
    if (err) return res.status(500).send("Error fetching balance");
    res.json({ balance });
  });
});

app.post("/deposit", (req, res) => {
  const { accountNo, amount } = req.body;

  db.updateBalance(accountNo, amount, true, (err, newBalance) => {
    if (err) return res.status(500).send("Error during deposit");
    res.json({ newBalance });
  });
});

app.post("/withdraw", (req, res) => {
  const { accountNo, amount } = req.body;
  db.updateBalance(
    accountNo,
    amount,
    false,
    (err, newBalance, insufficient) => {
      if (err) return res.status(500).send("Error during withdrawal");
      if (insufficient) return res.status(400).send("Insufficient funds");
      res.json({ newBalance });
    }
  );
});

var myServer = app.listen(3000, function () {
  console.log("Bank System Server listening on port 3000...");
});
