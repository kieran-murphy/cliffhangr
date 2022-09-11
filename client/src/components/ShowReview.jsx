import React from "react";

const ShowReview = ({ review }) => {
  return (
    <div className="pt-1 bg-base-300 text-center m-2 h-10 rounded-md flex flex-row place-content-evenly">
      <h1 className="font-bold">{review.user}: </h1>
      <h1>{review.text}</h1>
    </div>
  );
};

export default ShowReview;
