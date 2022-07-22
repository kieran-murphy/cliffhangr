import React from "react";

const ShowReview = ({ review }) => {
  return (
    <div className="bg-base-300 text-center m-2 h-10 rounded-md">
      {review.name}: {review.text}
    </div>
  );
};

export default ShowReview;
