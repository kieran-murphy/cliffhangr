import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SwapSpinner } from "react-spinners-kit";
import Watchlist from "./Watchlist";
import Favourites from "./Favourites";
import ProfileReviews from "./ProfileReviews";
import TestComponent from "./TestComponent";
import getUser from "../functions/getUser";
import getReviews from "../functions/getReviews";
import { FaWrench, FaCheckCircle, FaRegCheckSquare } from "react-icons/fa";

const Profile = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("profile");
  const [avgScore, setAvgScore] = useState(0.0);
  const [reviews, setReviews] = useState([]);
  const [following, setFollowing] = useState(false);
  const loggedInUsername = "Steve";
  const [user, setUser] = useState({
    name: "loading",
    age: 0,
    following: [],
    followers: [],
    reviews: [],
    favoriteReviews: [],
    favoriteShows: [],
    watchList: [],
    profilePicture: "",
    bio: "loading bio",
  });

  const calculateFollowing = () => {
    if (user.followers.includes(loggedInUsername)) {
      setFollowing(true);
    }
  };

  const getAvgScore = (reviews) => {
    let avg = reviews.reduce((r, c) => r + c.score, 0) / reviews.length;
    avg = avg.toFixed(2);
    setAvgScore(avg);
  };

  const follow = async (follower, following) => {
    const requestOptions_followsomeone = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: follower, someone: following }),
    };
    const requestOptions_receivefollow = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: following, follower: follower }),
    };

    await fetch(`/users/followsomeone`, requestOptions_followsomeone).then(
      await fetch(`/users/receivefollow`, requestOptions_receivefollow).then(
        setFollowing(true)
      )
    );
  };

  const unfollow = async (follower, following) => {
    const requestOptions_followsomeone = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: follower, someone: following }),
    };
    const requestOptions_receivefollow = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: following, follower: follower }),
    };

    await fetch(`/users/unfollowsomeone`, requestOptions_followsomeone).then(
      await fetch(`/users/unreceivefollow`, requestOptions_receivefollow).then(
        setFollowing(false)
      )
    );
  };

  useEffect(() => {
    getUser(username, setUser, setLoading);
    getReviews(user._id, setReviews, setLoading, "user");
  }, [loading]);

  useEffect(() => {
    calculateFollowing();
  }, [user]);

  useEffect(() => {
    getAvgScore(reviews, setAvgScore);
  }, [reviews]);

  return loading === true ? (
    <div className="py-10 w-full flex flex-row place-content-center">
      <SwapSpinner size={60} loading={true} />
    </div>
  ) : (
    <div className="">
      <div className="w-full flex flex-row lg:flex-col place-content-evenly">
        <div className="avatar my-8 ">
          <div className="w-20 rounded-full ring ring-slate-400 ring-offset-base-100 ring-offset-2">
            <img src={user.profilePicture} alt="profile" />
          </div>
        </div>
        <div className="self-center flex flex-col">
          <h1 className="text-4xl font-bold ">{user.name} </h1>
          {user.isAdmin ? (
            <div className="flex flex-row">
              <FaCheckCircle className="h-4 ml-6 mr-1 text-info" />{" "}
              <h1 className="font-light text-xs">Admin</h1>
            </div>
          ) : null}
        </div>
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
          className={`tab ${tab === "favourites" ? "tab-active" : ""}`}
          onClick={() => setTab("favourites")}
        >
          Favourites
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
          <div className="flex flex-col w-full place-content-center">
            {user.name === loggedInUsername ? null : (
              <>
                {following ? (
                  <div className="flex place-content-center mx-6 mt-6">
                    <button
                      className="btn w-full"
                      onClick={() => {
                        unfollow("Steve", user.name);
                      }}
                    >
                      Following <FaRegCheckSquare className="ml-2" />
                    </button>
                  </div>
                ) : (
                  <div className="flex place-content-center mx-6 mt-6">
                    <button
                      className="btn btn-info w-full"
                      onClick={() => {
                        follow("Steve", user.name);
                      }}
                    >
                      Follow +
                    </button>
                  </div>
                )}
              </>
            )}
            <div className=" stats stats-vertical shadow text-center m-6 bg-base-200">
              <TestComponent />

              <div className="stat">
                <div className="stat-title">Reviews</div>
                <div className="stat-value text-success">{reviews.length}</div>
                {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
              </div>

              <div className="stat">
                <div className="stat-title">Avg Score</div>
                <div className="stat-value text-success">
                  {reviews.length > 0 ? avgScore : 0}
                </div>
                {/* <div className="stat-desc">Out of five stars</div> */}
              </div>

              <div className="stat">
                <div className="stat-title">Following</div>
                <div className="stat-value text-warning">
                  {user.following.length}
                </div>
                {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
              </div>

              <div className="stat">
                <div className="stat-title">Followers</div>
                <div className="stat-value text-secondary">
                  {user.followers.length}
                </div>
                {/* <div className="stat-desc">↗︎ 90 (14%)</div> */}
              </div>
            </div>
          </div>
        ) : tab === "watchlist" ? (
          <Watchlist user={user} />
        ) : tab === "favourites" ? (
          <Favourites user={user} />
        ) : (
          <ProfileReviews reviews={reviews} />
        )}
      </div>
    </div>
  );
};

export default Profile;
