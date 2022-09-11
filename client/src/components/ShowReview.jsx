import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";

const ShowReview = ({ review, deleteReview }) => {
  return (
    <div className="my-2 pt-1 bg-base-300 text-center h-10 rounded-md flex flex-row place-content-evenly">
      <h1 className="font-bold">{review.user}: </h1>
      <h1>{review.text}</h1>
      <div className="mt-1 text-error text-xl">
        <FaRegTimesCircle
          onClick={() => {
            console.log("hello");
            deleteReview("steve");
          }}
        ></FaRegTimesCircle>
      </div>
    </div>
  );
};

export default ShowReview;
