import React, { useState } from "react";
import DisplayRating from "./DisplayRating";
import { FaRegTimesCircle, FaCaretUp, FaCaretDown } from "react-icons/fa";
import { ImStarEmpty, ImStarFull, ImHappy } from "react-icons/im"; //https://react-icons.github.io/react-icons/icons?name=im

const ShowReview = ({
  review,
  deleteReview,
  updateUpvotes,
  addReviewComment,
}) => {
  const [commentInput, setCommentInput] = useState(false);

  return (
    <div className="my-4 pt-1 text-center h-10 ">
      <label
        htmlFor={review.text}
        className="btn modal-button flex flex-row place-content-evenly"
      >
        <h1 className="font-bold">{review.user}</h1>
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
      <input type="checkbox" id={review.text} className="modal-toggle" />
      <label htmlFor={review.text} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="flex flex-col place-items-center">
            <div className="flex flex-row place-items-center">
              <h3 className="text-2xl font-bold mr-4">{review.user}</h3>{" "}
              <DisplayRating score={review.score} />
            </div>
            <h1 className="my-2">{review.time}</h1>
            <div className="text-left p-2 h-20 w-full card bg-base-200 rounded-lg">
              {review.text}
            </div>
            {/* <div className="mt-1 text-error text-xl">
              <FaRegTimesCircle
                onClick={() => {
                  deleteReview("steve");
                }}
              ></FaRegTimesCircle>
            </div> */}
            <div className="divider"></div>
            <h3 className="text-md font-bold">React</h3>
            <div className="flex flex-row place-items-center">
              <button
                onClick={() => updateUpvotes(review.user, review.upvotes + 1)}
                className="btn text-green-500 text-xl"
              >
                😍
              </button>
              <button
                onClick={() => updateUpvotes(review.user, review.upvotes - 1)}
                className="btn text-red-600 text-xl"
              >
                😂
              </button>
              <button
                onClick={() => updateUpvotes(review.user, review.upvotes - 1)}
                className="btn text-red-600 text-xl"
              >
                😮
              </button>
              <button
                onClick={() => updateUpvotes(review.user, review.upvotes - 1)}
                className="btn text-red-600 text-xl"
              >
                😢
              </button>
              <button
                onClick={() => updateUpvotes(review.user, review.upvotes - 1)}
                className="btn text-red-600 text-xl"
              >
                😡
              </button>
            </div>

            {/* <div className="divider"></div>
            <h3 className="text-md font-bold">Upvotes</h3>
            <div className="flex flex-row place-items-center">
              <button
                onClick={() => updateUpvotes(review.user, review.upvotes + 1)}
                className="btn gap-2 text-green-500 text-xl m-2"
              >
                <FaCaretUp></FaCaretUp>
              </button>
              <h3 className="text-3xl flex-end m-2">{review.upvotes}</h3>
              <button
                onClick={() => updateUpvotes(review.user, review.upvotes - 1)}
                className="btn gap-2 text-red-600 text-2xl m-2"
              >
                <FaCaretDown></FaCaretDown>
              </button>
            </div> */}
            <div className="divider"></div>

            <div className="flex flex-row place-items-center">
              <button className="btn gap-2 mx-2 font-bold">
                <h1 className="">
                  <ImStarEmpty />
                </h1>
                Favourite
              </button>

              <div className="mx-2 gap-2 dropdown">
                <label tabIndex={0} className="btn m-1">
                  <ImHappy />
                  React
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>😍</a>
                  </li>
                  <li>
                    <a>😍</a>
                  </li>
                  <li>
                    <a>😍</a>
                  </li>
                  <li>
                    <a>😍</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="divider"></div>
            <h3 className="text-md font-bold">Comments</h3>
            {review.comments.length === 0 ? (
              <div className="flex flex-col place-items-center">
                {commentInput ? (
                  <div className="flex flex-col place-items-center">
                    <textarea
                      className="textarea textarea-primary my-2"
                      placeholder="Your comment here"
                    ></textarea>
                    <button
                      className="btn w-full"
                      onClick={() => {
                        addReviewComment(review.user, "this is a comment");
                        setCommentInput(false);
                      }}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3>No comments yet. Add one!</h3>
                    <button
                      className="btn w-full"
                      onClick={() => setCommentInput(true)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {review.comments.map((comment) => {
                  return (
                    <div className="w-full">
                      <div className="divider"></div>
                      <div className="flex flex-row place-content-between place-items-center">
                        <img
                          className="rounded-full w-6 h-6"
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                          alt="d"
                        />
                        <h3 className="font-bold mx-2">{comment.user}</h3>
                        <h3>{comment.text}</h3>
                      </div>
                    </div>
                  );
                })}
                <button
                  className="btn w-full my-4"
                  onClick={() => {
                    addReviewComment(review.user, "this is a comment");
                    setCommentInput(false);
                  }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </label>
      </label>
    </div>
  );
};

export default ShowReview;
