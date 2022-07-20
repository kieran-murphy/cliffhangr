import React from "react";
import ShowReview from "./ShowReview";
var reviews = require("../data/reviews.json");

const ShowReviewList = ({ title }) => {
  const showtitle = title;
  // console.log(reviews.reviews)
  return (
    <div className="bg-secondary">
      <h1 className="text-3xl"> Reviews </h1>
      <div>
        {reviews.reviews[showtitle] ? (
          reviews.reviews[showtitle].map((review) => (
            <ShowReview key={review.name} review={review} />
          ))
        ) : (
          <div>no reviews yet</div>
        )}
      </div>
    </div>
    // <div>hello</div>
  );
};

export default ShowReviewList;
