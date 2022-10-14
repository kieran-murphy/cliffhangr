import { useEffect, useState } from "react";
import "./App.css";
import Show from "./components/Show";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import getAllShows from "./functions/getAllShows";
var data = require("./data/shows.json");

function App() {
  const [place, setPlace] = useState("home");
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getAllShows(setShows);
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
                key={s._id}
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
