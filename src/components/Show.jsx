import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Show = ({ title, img }) => {
  return (
    <div className="card lg:card-side bg-base-200 shadow-xl my-5 mx-5">
      <figure>
        <img src={img} alt="title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p></p>
        <div className="flex flex-row place-content-between w-full">
          <Rating />
          <div className="card-actions justify-end">
            <Link to={`show/${title}`}>
              <button className="btn btn-secondary">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
