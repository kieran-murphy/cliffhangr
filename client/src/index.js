import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { themeChange } from "theme-change";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { ThemeProvider } from "./Theme/ThemeContext";
import "./index.css";

import App from "./App";
import ShowDetail from "./components/ShowDetail";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ReviewForm from "./components/ReviewForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider> */}
      {/* <Background> */}
      <Navbar />
      <Routes>
        <Route path="/cliffhangr" element={<App />} />
        <Route path="cliffhangr/user/:username" element={<Profile />} />
        <Route path="cliffhangr/show/:id" element={<ShowDetail />} />
        <Route
          path="cliffhangr/show/:id/create_review"
          element={<ShowDetail />}
        />
      </Routes>
      {/* </Background> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

root.render(Index());
