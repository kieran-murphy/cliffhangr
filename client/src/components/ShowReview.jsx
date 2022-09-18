import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";

const ShowReview = ({ review, deleteReview }) => {
  return (
    // <div className="my-2 pt-1 bg-base-300 text-center h-10 rounded-md flex flex-row place-content-evenly">
    <div className="my-2 pt-1 text-center h-10">
      <label
        for="my-modal-4"
        class="btn modal-button flex flex-row place-content-evenly"
      >
        <h1 className="font-bold">{review.user}: </h1>
        <h1>{review.score}⭐</h1>
        <h1>{review.text}</h1>
      </label>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="mt-1 text-error text-xl">
            <FaRegTimesCircle
              onClick={() => {
                console.log("hello");
                deleteReview("steve");
              }}
            ></FaRegTimesCircle>
          </div>
        </label>
      </label>
    </div>
  );
};

export default ShowReview;
