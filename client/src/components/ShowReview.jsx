import React from "react";
import DisplayRating from "./DisplayRating";
import { FaRegTimesCircle, FaCaretUp, FaCaretDown } from "react-icons/fa";

const ShowReview = ({ review, deleteReview }) => {
  return (
    <div className="my-4 pt-1 text-center h-10 ">
      <label
        for={review.text}
        class="btn modal-button flex flex-row place-content-evenly"
      >
        <h1 className="font-bold">{review.user}: </h1>
        <h1>{review.score}⭐</h1>

        {/* {review.text.length > 16 ? (
          <h1>{review.text.substring(0, 16)}...</h1>
        ) : (
          <h1>{review.text}</h1>
        )} */}
        <div className="flex flex-row place-items-center">
          <h1>{review.upvotes}</h1>
          <h1 className="text-green-500 text-2xl">
            <FaCaretUp></FaCaretUp>
          </h1>
        </div>
      </label>
      <input type="checkbox" id={review.text} class="modal-toggle" />
      <label for={review.text} class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <div className="flex flex-col place-items-center">
            <div className="flex flex-row place-items-center mb-4">
              <h3 class="text-2xl font-bold mr-4">{review.user}</h3>{" "}
              <DisplayRating score={review.score} />
            </div>
            <h1>{review.time}</h1>
            {/* <div class="divider"></div> */}
            <div class="text-left p-2 h-20 w-full card bg-base-200 rounded-lg">
              {review.text}
            </div>

            {/* <div className="mt-1 text-error text-xl">
              <FaRegTimesCircle
                onClick={() => {
                  deleteReview("steve");
                }}
              ></FaRegTimesCircle>
            </div> */}
            <div class="divider"></div>
            <h3 className="text-md">Upvotes</h3>
            <div className="flex flex-row place-items-center">
              <button class="btn gap-2 text-green-500 text-xl m-2">
                <FaCaretUp></FaCaretUp>
              </button>
              <h3 className="text-3xl flex-end m-2">{review.upvotes}</h3>
              <button class="btn gap-2 text-red-600 text-2xl m-2">
                <FaCaretDown></FaCaretDown>
              </button>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default ShowReview;
