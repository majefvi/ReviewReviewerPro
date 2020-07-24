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
app.get("/", async (req, res, next) => {
  console.log("Homepage visited");
  const homePageStr = `Welcome to reviewReviewer! </br>
      Try navigating to /getRandomOriginalReview to view a review and leave a metaReview`;
  const homePageTemplate = `
      <html><div style="
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;">
          ${homePageStr}
      </div></html>`;
  res.send(homePageTemplate);
});

app.get("/getrandom", (req, res) => {
  console.log("Attempting to get a random review");
  OriginalReview.find({})
    .limit(1)
    .then((data) => {
      console.log("data from find: ", data[0]);
      let foundRando = data[0];
      let pid = data[0].product_id;
      let rando = {
        ...foundRando,
        // image: `https://loremflickr.com/320/240/corgi`,
        image: `https://amazon-asin.com/asincheck/?product_id=${pid}`,
      };
      res.send(data);
    });
});

app.post("/savemetareview", (req, res) => {
  let incomingData = req.body.formState;
  console.log(req.body);
  let newMetaReview = new MetaReview(incomingData);
  newMetaReview.save((err, doc) => {
    if (err) {
      console.log("Error saving: ", err);
      res.sendStatus(500);
    } else {
      console.log("metaReview saved successfully!");
      res.sendStatus(201);
    }
  });
});

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
