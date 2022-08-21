import React from "react";

const SmallReview = ({ title, img }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-4 h-24">
      <figure>
        <img src={img} alt="Movie" className="w-40" />
      </figure>
      <div className="card-body flex">
        <p className="font-semibold">{title}</p>
        {/* <div class="rating">
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" checked />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
        </div> */}
      </div>
    </div>
  );
};

export default SmallReview;
