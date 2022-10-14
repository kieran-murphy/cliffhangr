import React from "react";
import WatchlistItem from "./WatchlistItem";

const Watchlist = ({user}) => {
  return (
    <div className="m-6">
      {user.watchList.map((id) => {
        return (
          <WatchlistItem id={id} key={id} />
        );
      })}
    </div>
  );
};

export default Watchlist;
