import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  let navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateLogin = () => {
    // if (username === "steve" && password === "password") {
    //   navigate(`/cliffhangr/profile/${username}`);
    // } else {
    //   setWarning("Warning: Invalid username or password!");
    // }
    setUsername("");
    setPassword("");
  };

  // const submitLogin = () => {
  //   // alert(`logged in ${username} ${password}`);
  //   const RequestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //     }),
  //   };
  //   fetch(`/api/login`, RequestOptions)
  //     .then((res) => {
  //       if (!res.ok) {
  //         return res.text().then((text) => {
  //           throw new Error(text);
  //         });
  //       } else {
  //         return;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("caught it!", err);
  //     });
  //   validateLogin();
  // };

  async function loginUser() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      navigate(`/cliffhangr/profile/${username}`);
      validateLogin();
    } else {
      alert("Please check your username and password");
      validateLogin();
    }
  }

  return (
    <div className="py-10 w-full h-80 flex flex-col items-center justify-between">
      {warning.length > 0 ? (
        <div className="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{warning}</span>
          </div>
        </div>
      ) : null}

      <h1 className="text-3xl font-bold mt-6">Login</h1>
      <div className="mt-10">
        <h1 className="my-2">Username</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs mb-6"
          value={username}
          onChange={handleUsernameChange}
        />

        <h1 className="my-2">Password</h1>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <a className="link link-primary" href="./register">
          Don't have an account? Register here!
        </a>
        {/* <button className="btn mt-10 w-full" onClick={submitLogin}> */}
        <button className="btn mt-10 w-full" onClick={loginUser}>
          Submit
        </button>
      </div>
      {/* <div className="mt-10">
        <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-violet-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
