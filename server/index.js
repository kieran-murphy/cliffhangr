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

const UsersSchema = new mongoose.Schema({
    _id: String,
    name: String,
    age: Number,
    following: Array,
    followers: Array,
    favorites: Array,
    profilePicture: String,
    bio: String,
  });

const Shows = mongoose.model(
  "shows",
  ShowsSchema,
  "shows"
);

const Users = mongoose.model(
    "users",
    UsersSchema,
    "users"
  );

app.get("/shows/", (req, res) => {
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
    const id = mongoose.ObjectId(req.params.id);
    console.log(`searching for ${id}`);
    
    Shows.find({
        _id: id,
      })
      .exec((err, shows) => {
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
              shows: shows,
              total: count,
            });
          });
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
      })
      .exec((err, users) => {
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

app.listen(8080, () => {
  console.log("API is running on port 8080");
});
