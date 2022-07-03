import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { ThemeProvider } from "./Theme/ThemeContext";
import "./index.css";

import App from "./App";
import ShowDetail from "./components/ShowDetail";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <ThemeProvider> */}
    {/* <Background> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:username" element={<Profile />} />
      <Route path="/show/:showname" element={<ShowDetail />} />
    </Routes>
    {/* </Background> */}
    {/* </ThemeProvider> */}
  </BrowserRouter>
);
