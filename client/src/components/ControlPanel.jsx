import React from "react";

const ControlPanel = () => {
  const deleteShows = () => {
    const requestOptions = {
      method: "POST",
    };
    fetch(`/shows/deletechats/`, requestOptions);
  };

  const deleteUsers = () => {
    const requestOptions = {
      method: "POST",
    };
    fetch(`/users/deletechats/`, requestOptions);
  };

  const deleteReviews = () => {
    const requestOptions = {
      method: "POST",
    };
    fetch(`/reviews/deletechats/`, requestOptions);
  };

  const addAllShows = () => {
    const requestOptions = {
      method: "POST",
    };
    fetch(`/shows/addallshows/`, requestOptions);
  };

  const addAllUsers = () => {
    const requestOptions = {
      method: "POST",
    };
    fetch(`/users/addallusers/`, requestOptions);
  };

  const addTestReviews = () => {
    const requestOptions = {
      method: "POST",
    };
    fetch(`/reviews/addtest/`, requestOptions);
  };

  return (
    <div className="w-full px-10 place-content-center flex flex-col">
      <label
        className="btn btn-error mt-8 w-full"
        onClick={() => deleteShows()}
      >
        Delete all shows
      </label>
      <label
        className="btn btn-error mt-4 w-full"
        onClick={() => deleteUsers()}
      >
        Delete all users
      </label>
      <label
        className="btn btn-error mt-4 w-full"
        onClick={() => deleteReviews()}
      >
        Delete all reviews
      </label>
      <div className="divider"></div>

      <label className="btn btn-success w-full" onClick={() => addAllShows()}>
        Populate shows
      </label>
      <label
        className="btn btn-success mt-4 w-full"
        onClick={() => addAllUsers()}
      >
        Populate users
      </label>

      <div className="divider"></div>
      <label
        className="btn btn-info w-full"
        onClick={async () => {
          const deleteAll = new Promise((resolve, reject) => {
            deleteShows();
            deleteUsers();
            deleteReviews();
          });

          const addAll = new Promise((resolve, reject) => {
            addAllShows();
            addAllUsers();
          });

          await deleteAll.then(() => addAll());
        }}
      >
        Reset everything
      </label>
    </div>
  );
};

export default ControlPanel;
