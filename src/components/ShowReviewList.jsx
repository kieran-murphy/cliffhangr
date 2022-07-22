import React from "react";
import ShowReview from "./ShowReview";
var reviews = require("../data/reviews.json");

const ShowReviewList = ({ title }) => {
  return (
    <div className="mt-6">
      <div className="flex flex-row place-content-between mx-2">
        <h1 className="text-2xl font-medium mt-4">Reviews</h1>
        <h1 className="text-2xl font-medium mt-4"> 2</h1>
      </div>

      <hr className="m-1 opacity-50" />
      <div>
        {reviews.reviews[title] ? (
          reviews.reviews[title].map((review) => (
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
