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

  return (
    <div className="w-full px-10 place-content-center flex flex-col">
      <label
        className="btn btn-error mt-4 w-full"
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
      <br></br>

      <label
        className="btn btn-success mt-4 w-full"
        onClick={() => addAllShows()}
      >
        Populate shows
      </label>
      <label
        className="btn btn-success mt-4 w-full"
        onClick={() => addAllUsers()}
      >
        Populate users
      </label>
    </div>
  );
};

export default ControlPanel;
