import React from "react";
import WatchlistItem from "./WatchlistItem";

const Favourites = ({ user }) => {
  return (
    <div className="m-6">
      {user.favoriteShows.length != 0 ? (
        user.favoriteShows.map((id) => {
          return <WatchlistItem id={id} key={id} />;
        })
      ) : (
        <h1>No favourite shows yet</h1>
      )}
    </div>
  );
};

export default Favourites;
