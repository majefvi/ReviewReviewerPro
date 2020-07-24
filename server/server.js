const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");

const db = require("./db/db.js");
const OriginalReview = require("./db/models/originalReviewModel.js");

const PORT = process.env.PORT || 5000;

// configure body parser for AJAX requests
// app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("../client/build"));

// routes
app.get("/", (req, res) => {
  res.send("Hello from MERN");
});

app.get("/getrandom", (req, res) => {
  console.log("Attemtping getrandom");
  OriginalReview.find({})
    .limit(1)
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
