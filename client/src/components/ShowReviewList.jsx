import React from "react";
import ShowReview from "./ShowReview";

const ShowReviewList = ({ reviews, deleteReview, updateUpvotes, addReviewComment, addReaction }) => {
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
              review={review}
              deleteReview={deleteReview}
              updateUpvotes={updateUpvotes}
              index={index}
              addReviewComment={addReviewComment}
              addReaction={addReaction}
            />
          ))
        ) : (
          <div>no reviews yet</div>
        )}
      </div>
    </div>
    // <div>hello</div>
  );
};

export default ShowReviewList;
