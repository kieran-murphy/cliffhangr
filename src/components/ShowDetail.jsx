import { useState } from "react";
import Rating from "./Rating";
import { useParams } from "react-router-dom";
import ShowReviewList from "./ShowReviewList";
import ReviewConfirmation from "./ReviewConfirmation";
var data = require("../data/shows.json");

const ShowDetail = ({}) => {
  const { title } = useParams();
  const [confirm, setConfirm] = useState(false);
  return (
    <div>
      <div className="min-h-60">
        <img src={data[title].img} alt={title} />
      </div>

      <div className="mx-6">
        <div className="my-4 flex flex-row place-content-between">
          <div>
            <h1 className="font-bold text-3xl">{data[title].title}</h1>
            <h1 className="font-light text-lg">
              {data[title].seasons} season{data[title].seasons > 1 ? "s" : ""}
            </h1>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-2xl">2006</h1>
            <a
              href={`https://www.youtube.com/results?sp=mAEA&search_query=${data[title].title}+trailer`}
            >
              <button className="btn btn-sm btn-secondary">Trailer</button>
            </a>
          </div>
        </div>
        <p className=" my-8 italic font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>

        <div className="flex w-full place-content-center ">
          <div className="flex flex-col w-full place-content-between">
            <h1 className="font-light text-lg text-center">
              {data[title].stars} out of 5 stars
            </h1>
            <label for="my-modal" class="btn btn-success w-full mt-4">
              Write a Review
            </label>
          </div>
        </div>
        <ShowReviewList title={title} />
      </div>

      {confirm ? <ReviewConfirmation setConfirm={setConfirm} /> : null}

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-2xl font-bold text-center">Create Review</h3>
          <div className="flex flex-col place-content-between">
            <h3 className="mt-4">Rating:</h3>
            <Rating />

            <h3 className="mt-4">Review:</h3>
            <textarea
              class="textarea textarea-primary"
              placeholder="Your review here"
            ></textarea>

            <label
              className="btn btn-success mt-4"
              for="my-modal"
              // onClick={() => setConfirm(true)}
            >
              Create
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
