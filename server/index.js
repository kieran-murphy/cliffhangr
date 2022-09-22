const mongoose = require("mongoose");
const express = require("express");
var defaultShows = require("../client/src/data/shows.json");
var defaultUsers = require("../client/src/data/users.json");

const app = express();
app.use(express.json());
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
  desc: String,
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
  const reviewUser = req.body.reviewUser;
  const reviewComment = req.body.reviewComment;
  const reviewScore = req.body.reviewScore;
  const reviewUpvotes = 0;
  const listingQuery = { _id: id };
  var reviewTime = new Date();

  const updates = {
    $push: {
      reviews: {
        user: reviewUser,
        score: reviewScore,
        text: reviewComment,
        upvotes: reviewUpvotes,
        time: reviewTime,
      },
    },
  };
  Shows.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error updating reviews on listing with id ${listingQuery.id}!`);
    } else {
      console.log("1 review added");
    }
  });
});

app.post("/shows/:id/deletereview/", (req, res) => {
  const id = req.params.id;
  const user = req.body.user;
  const listingQuery = { _id: id };

  const updates = {
    $pull: {
      reviews: { user: user },
    },
  };
  Shows.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error deleting review on show with id ${listingQuery.id}!`);
    } else {
      console.log(req.body);
      console.log("1 review deleted");
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

app.post("/users/deletechats/", (req, res) => {
  const listingQuery = { letsChat: "https://stin.to/pbf69" };

  Users.deleteMany(listingQuery, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error deleting review on show with id ${listingQuery.id}!`);
    } else {
      console.log("chats deleted");
    }
  });
});

app.post("/shows/deletechats/", (req, res) => {
  const listingQuery = { letsChat: "https://stin.to/pbf69" };

  Shows.deleteMany(listingQuery, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error deleting review on show with id ${listingQuery.id}!`);
    } else {
      console.log("chats deleted");
    }
  });
});

app.post("/shows/addallshows/", (req, res) => {
  Shows.insertMany(defaultShows.shows, function (err, _result) {
    if (err) {
      res.status(400).send(`Error adding shows!`);
    } else {
      console.log("shows added");
    }
  });
});

app.post("/users/addallusers/", (req, res) => {
  Users.insertMany(defaultUsers.users, function (err, _result) {
    if (err) {
      res.status(400).send(`Error adding shows!`);
    } else {
      console.log("users added");
    }
  });
});

app.get("/api", (req, res) => {
  res.json({ users: ["user man", "userTwo", "userThree", "userFour"] });
});

app.listen(8080, () => {
  console.log("API is running on port 8080");
});
