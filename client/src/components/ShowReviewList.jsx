import React from "react";
import ShowReview from "./ShowReview";

const ShowReviewList = ({
  user,
  show,
  reviews,
  deleteReview,
  addReviewComment,
  addReaction,
  favoriteShow,
}) => {
  return (
    <div className="my-6">
      <div className="flex flex-row place-content-between mx-2">
        <h1 className="text-2xl font-medium mt-4">Reviews</h1>
        <h1 className="text-2xl font-medium mt-4">{reviews.length}</h1>
      </div>

      <hr className="m-1 opacity-50" />
      <div>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ShowReview
              key={review.user}
              user={user}
              review={review}
              show={show}
              deleteReview={deleteReview}
              index={index}
              addReviewComment={addReviewComment}
              addReaction={addReaction}
              favoriteShow={favoriteShow}
            />
          ))
        ) : (
          <div className="mx-2">No reviews yet</div>
        )}
      </div>
    </div>
    // <div>hello</div>
  );
};

export default ShowReviewList;
