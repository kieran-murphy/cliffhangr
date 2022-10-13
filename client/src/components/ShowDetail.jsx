import { useState, useEffect } from "react";
import Rating from "./Rating";
import { useParams } from "react-router-dom";
import { SwapSpinner } from "react-spinners-kit";
import ShowReviewList from "./ShowReviewList";
import ReviewConfirmation from "./ReviewConfirmation";
import {
  ImStarEmpty,
  ImStarFull,
  ImHappy,
  ImClock,
  ImPencil,
  ImPlay,
} from "react-icons/im";
var data = require("../data/shows.json");

const ShowDetail = ({}) => {
  const { id } = useParams();
  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState({});
  const [reviewComment, setReviewComment] = useState("");
  const [reviewScore, setReviewScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const addReview = (text, reviewScore) => {
    let reviewUser = (Math.random() + 1).toString(36).substring(7);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reviewUser: reviewUser,
        text: text,
        reviewScore: reviewScore,
      }),
    };
    fetch(`/shows/${id}/addreview`, requestOptions);
  };

  const deleteReview = (user) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user }),
    };
    fetch(`/shows/${id}/deletereview`, requestOptions);
    console.log(requestOptions);
  };

  const addReviewComment = (user, comment) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user, comment: comment }),
    };
    fetch(`/shows/${id}/addreviewcomment`, requestOptions);
    // console.log(requestOptions);
    setLoading(true);
  };

  const updateUpvotes = (user, updatedUpvotes) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user, updatedUpvotes: updatedUpvotes }),
    };
    fetch(`/shows/${id}/updateupvotes`, requestOptions);
    // console.log(requestOptions);
    setLoading(true);
  };

  const addReaction = (user, reaction) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user, reaction: reaction }),
    };
    fetch(`/shows/${id}/addreaction`, requestOptions);
    // console.log(requestOptions);
    setLoading(true);
  };

  const favoriteShow = (userID, showID) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID: userID, showID: showID }),
    };
    fetch(`/users/favoriteshow`, requestOptions);
    console.log(requestOptions);
  };

  const favoriteReview = (userID, showID) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID: userID, showID: showID }),
    };
    fetch(`/users/favoriteshow`, requestOptions);
    console.log(requestOptions);
  };

  const addWatchlist = (userID, showID) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID: userID, showID: showID }),
    };
    fetch(`/users/addwatchlist`, requestOptions);
    console.log(requestOptions);
  };

  const handleReviewChange = (event) => {
    setReviewComment(event.target.value);
  };

  useEffect(() => {
    async function getShow() {
      const response = await fetch(`/shows/${id}`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      console.log(records);
      setShow(records.shows);
      setLoading(false);
    }
    getShow();
    return;
  }, [loading]);

  return loading === true ? (
    <div className="py-10 w-full flex flex-row place-content-center">
      <SwapSpinner size={60} loading={true} />
    </div>
  ) : (
    <div>
      <div className="min-h-60">
        <img src={show.img} alt={show.title} />
      </div>

      <div className="mx-6">
        <div className="my-4 flex flex-row place-content-between">
          <div>
            <h1 className="font-bold text-3xl">{show.title}</h1>
            <h1 className="font-light text-lg">
              {show.seasons} season
              {show.seasons > 1 ? "s" : ""}
            </h1>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-2xl">2006</h1>
            <a
              href={`https://www.youtube.com/results?sp=mAEA&search_query=${show.title}+trailer`}
            >
              <button className="btn btn-sm btn-secondary gap-2">
                <ImPlay /> Trailer
              </button>
            </a>
          </div>
        </div>
        <p className=" my-8 italic font-light">{show.desc}</p>

        <div className="flex w-full place-content-center ">
          <div className="flex flex-col w-full place-content-between">
            <h1 className="font-light text-lg text-center">
              {show.score} out of 5 stars ⭐
            </h1>
            <label
              htmlFor="my-modal"
              className="btn btn-success w-full mt-4 gap-2"
            >
              <ImPencil />
              Write a Review
            </label>

            <button
              className="btn gap-2 mt-3 font-bold"
              onClick={() => favoriteShow("6347d5f8ba969d1eeee69110", show._id)}
            >
              <h1 className="">
                <ImStarEmpty />
              </h1>
              Favourite
            </button>
            <button
              className="btn gap-2 mt-3 font-bold"
              onClick={() => addWatchlist("6347d5f8ba969d1eeee69110", show._id)}
            >
              <h1 className="">
                <ImClock />
              </h1>
              Add to watchlist
            </button>
          </div>
        </div>

        {show.reviews ? (
          <ShowReviewList
            show={show}
            reviews={show.reviews}
            deleteReview={deleteReview}
            updateUpvotes={updateUpvotes}
            addReviewComment={addReviewComment}
            addReaction={addReaction}
            favoriteShow={favoriteShow}
          />
        ) : null}
      </div>

      {confirm ? <ReviewConfirmation setConfirm={setConfirm} /> : null}

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold text-center">Create Review</h3>
          <div className="flex flex-col place-content-between">
            <h3 className="mt-4">Review:</h3>
            <textarea
              value={reviewComment}
              onChange={handleReviewChange}
              className="textarea textarea-primary"
              placeholder="Your review here"
            ></textarea>

            <h3 className="mt-4">Rating:</h3>
            <Rating setReviewScore={setReviewScore} />

            <label
              className="btn btn-success mt-4"
              htmlFor="my-modal"
              onClick={() => {
                addReview(reviewComment, reviewScore);
                setReviewComment("");
                setReviewScore(0);
                setLoading(true);
              }}
            >
              Create
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
