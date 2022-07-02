import { useState } from "react";
import Reviews from "./Reviews";

const Profile = () => {
  const [tab, setTab] = useState("profile");

  return (
    <div className="">
      <div className="w-full flex flex-row place-content-evenly ">
        <div class="avatar my-8 ">
          <div class="w-20 rounded-full ring ring-slate-400 ring-offset-base-100 ring-offset-2">
            <img src="https://staticg.sportskeeda.com/editor/2022/03/8a925-16473693898539-1920.jpg" />
          </div>
        </div>
        <h1 className="text-4xl font-bold self-center">Steve</h1>
      </div>
      <div class="flex place-content-center tabs tabs-boxed ">
        <a
          class={`tab ${tab === "profile" ? "tab-active" : ""}`}
          onClick={() => setTab("profile")}
        >
          Profile
        </a>
        <a
          class={`tab ${tab === "reviews" ? "tab-active" : ""}`}
          onClick={() => setTab("reviews")}
        >
          Reviews
        </a>
        <a
          class={`tab ${tab === "watchlist" ? "tab-active" : ""}`}
          onClick={() => setTab("watchlist")}
        >
          Watchlist
        </a>
      </div>
      <div className="w-full flex place-content-center">
        {tab === "profile" ? (
          <div class="w-full stats stats-vertical shadow text-center m-6 bg-base-200">
            <div class="stat">
              <div class="stat-title">Reviews</div>
              <div class="stat-value text-success">82</div>
              <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div class="stat">
              <div class="stat-title">Avg Score</div>
              <div class="stat-value text-success">4.6</div>
              <div class="stat-desc">Out of five stars</div>
            </div>

            <div class="stat">
              <div class="stat-title">Following</div>
              <div class="stat-value text-warning">4,200</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
              <div class="stat-title">Followers</div>
              <div class="stat-value text-secondary">1,200</div>
              <div class="stat-desc">↗︎ 90 (14%)</div>
            </div>
          </div>
        ) : (
          <Reviews />
        )}
      </div>
    </div>
  );
};

export default Profile;
