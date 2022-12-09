import { useEffect, useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    alert(`logged in ${username} ${password} ${confirmPassword}`);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
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
          type="confirmpassword"
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

export default Register;
