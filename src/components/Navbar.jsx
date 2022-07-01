import React from "react";

const Navbar = ({ setPlace, place }) => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Top 🏆</a>
            </li>
            <li>
              <a>Explore 🧭</a>
            </li>
            <li>
              <a>Friends 👥</a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => setPlace("home")}
        >
          cliffhangr
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Top 🏆</a>
          </li>
          <li tabIndex="0">
            <a>Explore 🧭</a>
          </li>
          <li>
            <a>Friends 👥</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn"
          onClick={() =>
            place === "profile" ? setPlace("home") : setPlace("profile")
          }
        >
          Profile
        </a>
      </div>
    </div>
  );
};

export default Navbar;
