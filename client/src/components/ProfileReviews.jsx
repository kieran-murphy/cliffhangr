import React from "react";
import SmallReview from "./SmallReview";

const ProfileReviews = ({ reviews }) => {
  return (
    <div className="m-6">
      {reviews.length !== 0 ? (
        reviews.map((review) => {
          return (
            <SmallReview
              id={review.showId}
              key={review.showId}
              score={review.score}
            />
          );
        })
      ) : (
        <h1>No favourite shows yet</h1>
      )}
    </div>
  );
};

export default ProfileReviews;
