import React from "react";
import ReactStars from "react-stars";

const Rating = ({ score }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      value={score}
      onChange={ratingChanged}
      size={30}
      color2={"#ffd700"}
    />
  );
};

export default Rating;
