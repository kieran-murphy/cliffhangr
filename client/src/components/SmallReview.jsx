import React from "react";

const SmallReview = ({ title, img }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-4 h-24">
      <figure>
        <img src={img} alt="Movie" className="w-40" />
      </figure>
      <div className="card-body flex">
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default SmallReview;
