import React from "react";

const Login = () => {
  return (
    <div className="py-10 w-full h-80 flex flex-col items-center justify-between">
      <h1 className="text-3xl font-bold">Cliffhangr</h1>
      <br></br>
      {/* <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-secondary w-full max-w-xs"
      />
      <br></br>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-secondary w-full max-w-xs"
      /> */}
      <div className="mt-10">
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
      </div>
    </div>
  );
};

export default Login;
