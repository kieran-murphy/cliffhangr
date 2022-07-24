import React from "react";

const Rating = ({ score }) => {
  return (
    <div class="rating rating-md rating-half">
      {/* <input type="radio" name="rating-10" class="rating-hidden" /> */}

      {[...Array(10)].map((_, i) => {
        // console.log(score * 2);
        if (i % 2 === 0) {
          return (
            <input
              type="radio"
              name="rating-10"
              class="bg-white-500 mask mask-star-2 mask-half-1"
            />
          );
        } else {
          return (
            <input
              type="radio"
              name="rating-10"
              class="bg-white-500 mask mask-star-2 mask-half-2"
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;
