const mongoose = require("mongoose");
const express = require("express");
const app = express();

// mongoose.connect("mongodb+srv://mongo:X4LVTsp23GqQyeYp@cluster0.lvvgf.mongodb.net/cliffhangr?retryWrites=true&w=majority", {
mongoose.connect("mongodb+srv://mongo:X4LVTsp23GqQyeYp@cluster0.bve17ml.mongodb.net/cliffhangr?retryWrites=true&w=majority", {
useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ShowsSchema = new mongoose.Schema({
  _id: String,
  title: String,
  img: String,
  score: Number,
  seasons: Number,
  year: Number,
});

const Listings = mongoose.model(
  "shows",
  ShowsSchema,
  "shows"
);

app.get("/listings/:page/:limit", (req, res) => {
  const page = parseInt(req.params.page);
  const limit = parseInt(req.params.limit) + 1;

  //implement pagination
  Listings.find()
    .skip(page * limit)
    .limit(limit)
    .exec((err, listings) => {
      if (err) {
        res.status(500).send(err);
      } else {
        Listings.estimatedDocumentCount().exec((err, count) => {
          if (err) {
            console.log(err);
          }

          res.status(200).send({
            listings: listings,
            total: count,
          });
        });
      }
    });
});

app.listen(3000, () => {
  console.log("API is running on port 3000");
});
