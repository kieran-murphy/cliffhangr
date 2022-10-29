import React from "react";
import SmallReview from "./SmallReview";

const ProfileReviews = ({ user }) => {
  return (
    <div className="m-6">
      {user.reviews.length != 0 ? (
        user.reviews.map((review) => {
          return <SmallReview id={review.showID} key={review.showID} />;
        })
      ) : (
        <h1>No favourite shows yet</h1>
      )}
    </div>
  );
};

export default ProfileReviews;
