import React from "react";

const Rating = () => {
  return (
    <div class="rating">
      <input type="radio" name="rating-1" class="mask mask-star" />
      <input type="radio" name="rating-1" class="mask mask-star" checked />
      <input type="radio" name="rating-1" class="mask mask-star" />
      <input type="radio" name="rating-1" class="mask mask-star" />
      <input type="radio" name="rating-1" class="mask mask-star" />
    </div>
  );
};

export default Rating;
