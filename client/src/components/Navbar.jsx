import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";
import { useJwt } from "react-jwt";
import jwt from "jwt-decode";

const Navbar = () => {
  const username = "steve";
  const [theme, setTheme] = useState("dracula");
  const { loggedIn, toggleLoggedIn } = useContext(LoggedInContext);

  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "pastel" : "dracula");
  };

  const logout = () => {
    localStorage.removeItem("token");
    toggleLoggedIn(false);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return loggedIn ? (
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
            <Link to={`/cliffhangr/search/users`}>
              <li>
                <div>Users 🧑</div>
              </li>
            </Link>

            <li>
              <div onClick={toggleTheme}>
                Theme {theme === "dracula" ? "🌙" : "☀️"}
              </div>
            </li>

            <Link to={`/cliffhangr/admin/settings`}>
              <li>
                <div>Control panel ⚙️</div>
              </li>
            </Link>
            <Link to={`/cliffhangr/login`}>
              <li onClick={logout}>
                <div>Logout 🖥️</div>
              </li>
            </Link>
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
          <Link to={`/cliffhangr/search/users`}>
            <li>
              <div>Users 🧑</div>
            </li>
          </Link>

          <li>
            <div>Theme {theme === "dracula" ? "🌙" : "☀️"}</div>
          </li>

          <Link to={`/cliffhangr/admin/settings`}>
            <li>
              <div>Control panel ⚙️</div>
            </li>
          </Link>
          <Link to={`/cliffhangr/login`}>
            <li onClick={logout}>
              <div>Logout 🖥️</div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={`cliffhangr/profile/${username}`}>
          <button className="btn">{username}</button>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Navbar;
