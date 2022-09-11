const mongoose = require("mongoose");
const express = require("express");

const app = express();
mongoose.connect(
  "mongodb+srv://mongo:X4LVTsp23GqQyeYp@cluster0.bve17ml.mongodb.net/cliffhangr?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const ShowsSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  title: String,
  img: String,
  score: Number,
  seasons: Number,
  year: Number,
  reviews: Array,
});

const UsersSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  age: Number,
  following: Array,
  followers: Array,
  favorites: Array,
  profilePicture: String,
  bio: String,
});

const Shows = mongoose.model("shows", ShowsSchema, "shows");

const Users = mongoose.model("users", UsersSchema, "users");

app.get("/shows", (req, res) => {
  Shows.find()
    .limit(10)
    .exec((err, shows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        Shows.estimatedDocumentCount().exec((err, count) => {
          if (err) {
            console.log(err);
          }
          res.status(200).send({
            shows: shows,
            total: count,
          });
          console.log("success");
        });
      }
    });
});

app.get("/shows/:id/", (req, res) => {
  const id = req.params.id;
  console.log(`searching for ${id}`);

  Shows.find({
    _id: id,
  }).exec((err, shows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      Shows.estimatedDocumentCount({
        _id: id,
      }).exec((err, count) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          shows: shows[0],
        });
      });
    }
  });
});

app.post("/shows/:id/addreview", (req, res) => {
  const id = req.params.id;
  const listingQuery = { _id: id };

  const updates = {
    $push: {
      reviews: { user: "update", score: 5.0, text: "update" },
    },
  };
  Shows.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error updating likes on listing with id ${listingQuery.id}!`);
    } else {
      console.log("1 review added");
    }
  });
});

app.get("/users", (req, res) => {
  Users.find()
    .limit(10)
    .exec((err, users) => {
      if (err) {
        res.status(500).send(err);
      } else {
        Users.estimatedDocumentCount().exec((err, count) => {
          if (err) {
            console.log(err);
          }
          res.status(200).send({
            users: users,
            total: count,
          });
        });
      }
    });
});

app.get("/users/:username/", (req, res) => {
  const username = req.params.username;
  console.log(`searching for ${username}`);

  Users.find({
    name: username,
  }).exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      Users.estimatedDocumentCount({
        name: username,
      }).exec((err, count) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          users: users,
          total: count,
        });
      });
    }
  });
});

app.get("/api", (req, res) => {
  res.json({ users: ["user man", "userTwo", "userThree", "userFour"] });
});

app.listen(8080, () => {
  console.log("API is running on port 8080");
});
