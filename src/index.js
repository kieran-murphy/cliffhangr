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
      <Route path="/cliffhangr" element={<App />} />
      <Route path="cliffhangr/user/:username" element={<Profile />} />
      <Route path="cliffhangr/show/:title" element={<ShowDetail />} />
    </Routes>
    {/* </Background> */}
    {/* </ThemeProvider> */}
  </BrowserRouter>
);
