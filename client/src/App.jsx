import { useEffect, useState } from "react";
import "./App.css";
import Show from "./components/Show";
import Search from "./components/Search";
import getAllShows from "./functions/getAllShows";
import { SwapSpinner } from "react-spinners-kit";

function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllShows(setShows, setLoading);
    return;
  }, []);

  return loading === true ? (
    <div className="py-10 w-full flex flex-row place-content-center">
      <SwapSpinner size={60} loading={true} />
    </div>
  ) : (
    <div className="w-full">
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
