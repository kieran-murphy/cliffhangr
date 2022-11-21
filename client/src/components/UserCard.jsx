import React from "react";
import DisplayRating from "./DisplayRating";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="card lg:card-side bg-base-200 shadow-xl my-5 mx-5">
      <div className="card-body flex flex-row justify-between">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={user.profilePicture} alt={user.name} />
          </div>
        </div>
        <h2 className="card-title">{user.name}</h2>

        <Link to={`../cliffhangr/profile/${user.name}`}>
          <button className="btn btn-secondary mt-2">View</button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
