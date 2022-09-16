import React from "react";

const ControlPanel = () => {
  return (
    <div className="w-full px-10 place-content-center flex flex-col">
      <label className="btn btn-error mt-4 w-full">Delete shows</label>
      <label className="btn btn-error mt-4 w-full">Delete users</label>
      <label className="btn btn-success mt-4 w-full">Populate users</label>
      <label className="btn btn-success mt-4 w-full">Populate shows</label>
    </div>
  );
};

export default ControlPanel;
