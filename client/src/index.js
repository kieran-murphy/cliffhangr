import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { themeChange } from "theme-change";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

import App from "./App";
import ShowDetail from "./components/ShowDetail";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ControlPanel from "./components/ControlPanel";
import Login from "./components/Login";
import Register from "./components/Register";
import UserSearch from "./components/UserSearch";
import { LoggedInContextProvider } from "./context/LoggedInContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  return (
    <LoggedInContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cliffhangr" element={<App />} />
          <Route path="/cliffhangr/login" element={<Login />} />
          <Route path="/cliffhangr/register" element={<Register />} />
          <Route path="/cliffhangr/search/users" element={<UserSearch />} />
          <Route path="/cliffhangr/admin/settings" element={<ControlPanel />} />
          <Route path="cliffhangr/profile/:username" element={<Profile />} />
          <Route path="cliffhangr/show/:id" element={<ShowDetail />} />
          <Route
            path="cliffhangr/show/:id/create_review"
            element={<ShowDetail />}
          />
        </Routes>
      </BrowserRouter>
    </LoggedInContextProvider>
  );
}

root.render(Index());
