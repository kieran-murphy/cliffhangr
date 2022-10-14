import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Watchlist from "./Watchlist";

const Profile = () => {
  const { username } = useParams();
  const [tab, setTab] = useState("profile");
  const [user, setUser] = useState({name: "loading", age: 0, following: [], followers: [], favoriteReviews: [], favoriteShows: [], watchList: [], profilePicture: "", bio: "loading bio"});

  async function getUser() {
    const response = await fetch(`/users/${username}`);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const f = await response.json();
    console.log(username)
    console.log(f);
    setUser(f.users);
    
  }

  useEffect(() => {
    getUser();
    return;
  }, []);

  return (

    <div className="">
      <div className="w-full flex flex-row lg:flex-col place-content-evenly">
        <div className="avatar my-8 ">
          <div className="w-20 rounded-full ring ring-slate-400 ring-offset-base-100 ring-offset-2">
            <img
              src="https://staticg.sportskeeda.com/editor/2022/03/8a925-16473693898539-1920.jpg"
              alt="profile"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold self-center">{user.name}</h1>
      </div>
      <div className="flex place-content-center tabs tabs-boxed ">
        <a
          className={`tab ${tab === "profile" ? "tab-active" : ""}`}
          onClick={() => setTab("profile")}
        >
          Profile
        </a>
        <a
          className={`tab ${tab === "reviews" ? "tab-active" : ""}`}
          onClick={() => setTab("reviews")}
        >
          Reviews
        </a>
        <a
          className={`tab ${tab === "watchlist" ? "tab-active" : ""}`}
          onClick={() => setTab("watchlist")}
        >
          Watchlist
        </a>
      </div>
      <div className="w-full flex place-content-center">
        {tab === "profile" ? (
          <div className="w-full stats stats-vertical shadow text-center m-6 bg-base-200">
            <div className="stat">
              <div className="stat-title">Reviews</div>
              <div className="stat-value text-success">82</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">Avg Score</div>
              <div className="stat-value text-success">4.6</div>
              <div className="stat-desc">Out of five stars</div>
            </div>

            <div className="stat">
              <div className="stat-title">Following</div>
              <div className="stat-value text-warning">{user.following.length}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Followers</div>
              <div className="stat-value text-secondary">{user.followers.length}</div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
          </div>
        ) : (
          <Watchlist user={user}/>
        )}
      </div>
    </div>
  );
};

export default Profile;
