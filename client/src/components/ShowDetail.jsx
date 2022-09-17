import { useState, useEffect } from "react";
import Rating from "./Rating";
import { useParams } from "react-router-dom";
import ShowReviewList from "./ShowReviewList";
import ReviewConfirmation from "./ReviewConfirmation";
var data = require("../data/shows.json");

const ShowDetail = ({}) => {
  const { id } = useParams();
  const [confirm, setConfirm] = useState(false);
  const [reviewScore, setReviewScore] = useState(0);
  const [show, setShow] = useState({});
  const [reviewComment, setReviewComment] = useState("");

  const addReview = (reviewComment, reviewScore) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reviewComment: reviewComment,
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
    }

    getShow();

    return;
  }, []);

  return (
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
              <button className="btn btn-sm btn-secondary">Trailer</button>
            </a>
          </div>
        </div>
        <p className=" my-8 italic font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>

        <div className="flex w-full place-content-center ">
          <div className="flex flex-col w-full place-content-between">
            <h1 className="font-light text-lg text-center">
              {show.score} out of 5 stars
            </h1>
            <label htmlFor="my-modal" className="btn btn-success w-full mt-4">
              Write a Review
            </label>
          </div>
        </div>

        {show.reviews ? (
          <ShowReviewList reviews={show.reviews} deleteReview={deleteReview} />
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
            <h3 className="mt-4">Rating:</h3>
            <Rating setReviewScore={setReviewScore} />

            <h3 className="mt-4">Review:</h3>
            <textarea
              value={reviewComment}
              onChange={handleReviewChange}
              className="textarea textarea-primary"
              placeholder="Your review here"
            ></textarea>

            <label
              className="btn btn-success mt-4"
              htmlFor="my-modal"
              onClick={() => {
                addReview(reviewComment, reviewScore);
                setReviewComment("");
                setReviewScore(0);
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
