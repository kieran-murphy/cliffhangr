import React, { useState } from "react";

const LoggedInContext = React.createContext();

const LoggedInContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);

  function toggleLoggedIn(s) {
    setLoggedIn(s);
  }

  return (
    <LoggedInContext.Provider value={{ loggedIn, toggleLoggedIn }}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export { LoggedInContext, LoggedInContextProvider };
