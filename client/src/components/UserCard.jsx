import React from "react";
import DisplayRating from "./DisplayRating";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="card lg:card-side bg-base-200 shadow-xl my-5 mx-5">
      <figure>
        <img
          src="https://staticg.sportskeeda.com/editor/2022/03/8a925-16473693898539-1920.jpg"
          alt="title"
        />
      </figure>
      <div className="card-body flex flex-row">
        <h2 className="card-title">{user.name}</h2>
        <p></p>

        <div className="card-actions">
          <Link to={`../cliffhangr/profile/${user.name}`}>
            <button className="btn btn-secondary">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
