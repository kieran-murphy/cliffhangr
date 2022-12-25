import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import jwt from "jwt-decode";

const TestComponent = () => {
  let navigate = useNavigate();

  const [token, setToken] = useState({});
  const [tokenName, setTokenName] = useState("");
  const { decodedToken } = useJwt(token);

  async function populateUser() {
    console.log("pka");
    const req = await fetch("/api/checklogin", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setTokenName(data.username);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      // const user = jwt.decode(token);
      const user = decodedToken;
      if (!user) {
        // console.log("no token");
        // localStorage.removeItem("token");
        // history.replace("/login");
        // navigate(`/cliffhangr/login`);
      } else {
        console.log("populate user");
        populateUser();
      }
    }
  }, []);

  return (
    <div className="stat">
      <div className="stat-title">test</div>
      <div className="stat-value text-success">{tokenName}</div>
      {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
    </div>
  );
};

export default TestComponent;
