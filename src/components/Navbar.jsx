import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";

const Navbar = () => {
  const username = "steve";

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
              <a>Theme 🎨</a>
            </li>
          </ul>
        </div>
        <Link to={`/cliffhangr`}>
          <button className="btn btn-ghost normal-case text-xl">
            cliffhangr
          </button>
        </Link>
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
            <a>Theme 🎨</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={`cliffhangr/user/${username}`}>
          <button className="btn">Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
