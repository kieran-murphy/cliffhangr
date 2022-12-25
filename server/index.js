if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

var defaultShows = require("../client/src/data/shows.json");
var defaultUsers = require("../client/src/data/users.json");
var defaultReviews = require("../client/src/data/reviews.json");

const app = express();
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
// app.use(passport.initialize());
// app.use(passport.session());

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
  name: { type: String, unique: true },
  age: Number,
  following: Array,
  followers: Array,
  reviews: Array,
  favoriteReviews: Array,
  favoriteShows: Array,
  watchList: Array,
  profilePicture: String,
  bio: String,
  isAdmin: Boolean,
  password: String,
});

const ReviewsSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  userId: String,
  username: String,
  showId: String,
  title: String,
  score: Number,
  text: String,
  reacts: Array,
  comments: Array,
  time: String,
});

const Shows = mongoose.model("shows", ShowsSchema, "shows");

const Users = mongoose.model("users", UsersSchema, "users");

const Reviews = mongoose.model("reviews", ReviewsSchema, "reviews");

app.get("/users", (req, res) => {
  Users.find().exec((err, users) => {
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

app.get("/shows", (req, res) => {
  Shows.find().exec((err, shows) => {
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

app.get("/reviews", (req, res) => {
  Reviews.find().exec((err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      Reviews.estimatedDocumentCount().exec((err, count) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          reviews: reviews,
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
  const text = req.body.text;
  const reviewScore = req.body.reviewScore;
  const reviewTime = req.body.reviewTime;
  const reviewReacts = [];
  const reviewComments = [];
  const listingQuery = { _id: id };

  const updates = {
    $push: {
      reviews: {
        userId: reviewUser._id,
        username: reviewUser.name,
        score: reviewScore,
        text: text,
        reacts: reviewReacts,
        comments: reviewComments,
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

app.post("/reviews/:id/addreaction/", (req, res) => {
  const id = req.params.id;
  const reaction = req.body.reaction;
  const userID = req.body.userID;
  const username = req.body.username;
  const listingQuery = {
    _id: id,
  };

  const updates = {
    $push: {
      reacts: {
        reaction: reaction,
        userID: userID,
        username: username,
      },
    },
  };
  Reviews.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error updating review on show with id ${listingQuery.id}!`);
    } else {
      console.log("1 review updated");
    }
  });
});

app.post("/reviews/:id/addreviewcomment/", (req, res) => {
  const id = req.params.id;
  const userID = req.body.userID;
  const username = req.body.username;
  const comment = req.body.comment;
  const listingQuery = {
    _id: id,
  };

  const updates = {
    $push: {
      comments: { userID: userID, username: username, text: comment },
    },
  };
  Reviews.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error updating review on show with id ${listingQuery.id}!`);
    } else {
      console.log("1 comment added");
    }
  });
});

app.get("/users/:username/", (req, res) => {
  const username = req.params.username;
  console.log(`searching for ${username}`);

  Users.find({
    name: username,
  })
    .collation({ locale: "en", strength: 2 })
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
            user: users[0],
          });
        });
      }
    });
});

app.post("/users/favoriteshow", (req, res) => {
  const name = req.body.name;
  const showID = req.body.showID;

  const listingQuery = { name: name };

  const updates = {
    $push: {
      favoriteShows: showID,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error favoriting`);
    } else {
      console.log("1 favorite added");
    }
  });
});

app.post("/users/addwatchlist", (req, res) => {
  const name = req.body.name;
  const showID = req.body.showID;

  const listingQuery = { name: name };

  const updates = {
    $push: {
      watchList: showID,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error favoriting`);
    } else {
      console.log("1 watchlist added");
    }
  });
});

app.post("/users/followsomeone", (req, res) => {
  const name = req.body.name;
  const someone = req.body.someone;

  const listingQuery = { name: name };

  const updates = {
    $push: {
      following: someone,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error favoriting`);
    } else {
      console.log("1 follow added");
    }
  });
});

app.post("/users/receivefollow", (req, res) => {
  const name = req.body.name;
  const follower = req.body.follower;

  const listingQuery = { name: name };

  const updates = {
    $push: {
      followers: follower,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error following`);
    } else {
      console.log("1 follower added");
    }
  });
});

app.post("/users/unfollowsomeone", (req, res) => {
  const name = req.body.name;
  const someone = req.body.someone;

  const listingQuery = { name: name };

  const updates = {
    $pull: {
      following: someone,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error favoriting`);
    } else {
      console.log("1 follow removed");
    }
  });
});

app.post("/users/unreceivefollow", (req, res) => {
  const name = req.body.name;
  const follower = req.body.follower;

  const listingQuery = { name: name };

  const updates = {
    $pull: {
      followers: follower,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error following`);
    } else {
      console.log("1 follower removed");
    }
  });
});

app.post("/users/unfavoriteshow", (req, res) => {
  const name = req.body.name;
  const showID = req.body.showID;

  const listingQuery = { name: name };

  const updates = {
    $pull: {
      favoriteShows: showID,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error favoriting`);
    } else {
      console.log("1 favorite removed");
    }
  });
});

app.post("/users/removewatchlist", (req, res) => {
  const name = req.body.name;
  const showID = req.body.showID;

  const listingQuery = { name: name };

  const updates = {
    $pull: {
      watchList: showID,
    },
  };
  Users.updateOne(listingQuery, updates, function (err, _result) {
    if (err) {
      res.status(400).send(`Error favoriting`);
    } else {
      console.log("1 watchlist removed");
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
      console.log("users deleted");
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
      console.log("shows deleted");
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

app.post("/reviews/addtest/", (req, res) => {
  Reviews.insertMany(defaultReviews.reviews, function (err, _result) {
    if (err) {
      res.status(400).send(`Error adding shows!`);
    } else {
      console.log("reviews added");
    }
  });
});

app.post("/reviews/add/", (req, res) => {
  const review = req.body.review;
  Reviews.insertMany(review, function (err, _result) {
    if (err) {
      res.status(400).send(`Error adding review!`);
      console.log(req.body);
    } else {
      console.log("review added");
    }
  });
});

app.post("/reviews/deletechats/", (req, res) => {
  const listingQuery = { letsChat: "https://stin.to/pbf69" };

  Reviews.deleteMany(listingQuery, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error deleting review on show with id ${listingQuery.id}!`);
    } else {
      console.log("reviews deleted");
    }
  });
});

app.get("/reviews/show/:showid/", (req, res) => {
  const showid = req.params.showid;
  console.log(`searching for ${showid}`);

  Reviews.find({
    showId: showid,
  })
    .collation({ locale: "en", strength: 2 })
    .exec((err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        Reviews.estimatedDocumentCount({
          showId: showid,
        }).exec((err, count) => {
          if (err) {
            console.log(err);
          }
          res.status(200).send({
            reviews: reviews,
          });
        });
      }
    });
});

app.get("/reviews/user/:userid/", (req, res) => {
  const userid = req.params.userid;
  console.log(`searching for ${userid}`);

  Reviews.find({
    userId: userid,
  })
    .collation({ locale: "en", strength: 2 })
    .exec((err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        Reviews.estimatedDocumentCount({
          userId: userid,
        }).exec((err, count) => {
          if (err) {
            console.log(err);
          }
          res.status(200).send({
            reviews: reviews,
          });
        });
      }
    });
});

// app.post("/login", (req, res) => {
//   let user;
//   const username = req.body.username;
//   const password = req.body.password;
//   // console.log(password);
//   Users.find({
//     name: username,
//   })
//     .collation({ locale: "en", strength: 2 })
//     .exec((err, users) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         Users.estimatedDocumentCount({
//           name: username,
//         }).exec((err, count) => {
//           if (err) {
//             console.log(err);
//           }
//           user = users[0];
//         });
//       }
//     });

//   if (bcrypt.compareSync(password, user.password)) {
//     console.log("match");
//   } else {
//     console.log("no match");
//   }
// });

app.post("/users/add/", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    name: username,
    age: 0,
    following: [],
    followers: [],
    reviews: [],
    favoriteReviews: [],
    favoriteShows: [],
    watchList: [],
    profilePicture:
      "https://reformedpilate.wpenginepowered.com/wp-content/uploads/2019/07/blank-profile-picture-973460_1280.png",
    bio: "",
    isAdmin: false,
    password: hashedPassword,
  };

  Users.insertMany(user, function (err, _result) {
    if (err) {
      res.status(400).send(`Error adding review!`);
      console.log(req.body);
    } else {
      console.log("user registered");
    }
  });
});

app.post("/api/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await Users.findOne({
    name: username,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        username: user.name,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/api/checklogin", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const username = decoded.username;
    const user = await Users.findOne({
      name: username,
    });

    return res.json({ status: "ok", username: user.name });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});

app.listen(8080, () => {
  console.log("API is running on port 8080");
});
