import { useEffect, useState } from "react";
import "./App.css";
import Show from "./components/Show";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
var data = require("./data/shows.json");

function App() {
  const [place, setPlace] = useState("home");
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch("/shows");
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      console.log(response);
      const records = await response.json();
      setShows(records.shows);
    }

    getRecords();

    return;
  }, []);

  return (
    <div className="w-full">
      {/* <Navbar setPlace={setPlace} place={place} /> */}

      <div>
        <div className="flex flex-col justify-center">
          <Search />

          {shows.map((s) => {
            return (
              <Show
                title={s.title}
                img={s.img}
                score={s.score}
                key={s.title}
                id={s._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
