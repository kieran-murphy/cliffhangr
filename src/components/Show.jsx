import React from "react";

const Show = () => {
  return (
    <div class="card lg:card-side bg-base-200 shadow-xl mt-10 mx-5">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New show is released!</h2>
        <p></p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
