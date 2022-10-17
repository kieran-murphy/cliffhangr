import React from "react";
import WatchlistItem from "./WatchlistItem";

const Watchlist = ({ user }) => {
  return (
    <div className="m-6">
      {user.watchList.length !== 0 ? (
        user.watchList.map((id) => {
          return <WatchlistItem id={id} key={id} />;
        })
      ) : (
        <h1>No watchlist shows yet</h1>
      )}
    </div>
  );
};

export default Watchlist;
