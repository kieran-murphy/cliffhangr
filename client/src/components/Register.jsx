import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitLogin = () => {
    // alert(`logged in ${username} ${password}`);
    const RequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    fetch(`/users/add`, RequestOptions)
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    navigate(`/cliffhangr/login`);
  };

  return (
    <div className="py-10 w-full h-80 flex flex-col items-center justify-between">
      <h1 className="text-3xl font-bold">Register</h1>

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

        <h1 className="my-2">Confirm Password</h1>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <br />
        <a className="link link-primary" href="./login">
          Already have an account? Login!
        </a>
        <button className="btn mt-10 w-full" onClick={submitLogin}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
