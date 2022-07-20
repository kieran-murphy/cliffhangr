import { useState } from "react";
import { useParams } from "react-router-dom";
import ShowReviewList from "./ShowReviewList";
var data = require("../data/shows.json");

const ShowDetail = ({}) => {
  const { title } = useParams();
  return (
    <div>
    <div className="min-h-60">
      <img src={data[title].img} alt={title} />
    </div>
    <div className="mx-6">
    <div className="my-4 flex flex-row place-content-between">
      <div>
        <h1 className="font-bold text-3xl">{data[title].title}</h1>
        <h1 className="font-light text-lg">{data[title].seasons} season{data[title].seasons > 1 ? 's' : ''}</h1>
        
      </div>
      <div className="flex flex-col text-center">
      <h1 className="font-bold text-2xl">2006</h1>
      <a href={`https://www.youtube.com/results?sp=mAEA&search_query=${data[title].title}+trailer`}>
      <button className="btn btn-sm btn-secondary">Trailer</button>
      </a>
      </div>
      

    </div>
    <p className=" my-8 italic font-light">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    </p>
    
    <div className="flex w-full place-content-center ">
      <div className="flex flex-col w-full text-center place-content-between" >
      <h1 className="font-light text-lg">{data[title].stars} out of 5 stars</h1>
      <button className="btn btn-success w-full mt-4">Write a Review</button>
      <ShowReviewList title={title}/>
      </div>
    </div>
     </div>
    </div>
  );
};

export default ShowDetail;
