import React from "react";
import WatchlistItem from "./WatchlistItem";

const Favourites = ({ user }) => {
  return (
    <div className="m-6">
      {user.favoriteShows.map((id) => {
        return <WatchlistItem id={id} key={id} />;
      })}
    </div>
  );
};

export default Favourites;
