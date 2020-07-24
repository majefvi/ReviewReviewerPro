const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");

const db = require("./db/db.js");
const OriginalReview = require("./db/models/originalReviewModel.js");
const MetaReview = require("./db/models/metaReviewModel");

const PORT = process.env.PORT || 5000;

// configure body parser for AJAX requests
// app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./client/build"));

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

app.post("/savemetareview", (req, res) => {
  let incomingData = req.body.formState;
  console.log(req.body);
  let newMetaReview = new MetaReview(incomingData);
  newMetaReview.save((err, doc) => {
    if (err) return console.log("Error saving: ", err);
    else console.log("metaReview saved successfully!");
  });
  res.sendStatus(201);
});

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
