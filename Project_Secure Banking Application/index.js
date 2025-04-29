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
  const { loginEmail, loginPassword } = req.body;

  console.log(req.body);

  db.loginCustomer(req, res);
});

var myServer = app.listen(3000, function () {
  console.log("Bank System Server listening on port 3000...");
});
