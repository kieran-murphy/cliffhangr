import { useState } from "react";
import "./App.css";
import Show from "./components/Show";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
var data = require("./data/shows.json");

function App() {
  const [place, setPlace] = useState("home");

  return (
    <div className="w-full">
      {/* <Navbar setPlace={setPlace} place={place} /> */}

      <div>
        <div className="flex flex-col justify-center">
          <Search />
          {/* <Show
            title={"Lost"}
            img={
              "https://pm1.narvii.com/6254/8f6401d09c5faab40e6e2412e0c931c1697d8872_hq.jpg"
            }
            score={4.5}
          />
          <Show
            title={"Ozark"}
            img={
              "https://s3.amazonaws.com/static.rogerebert.com/uploads/blog_post/primary_image/streaming/netflix-ozark-season-4-tv-review/OZARK_402_Unit_00159R.jpg"
            }
            score={5}
          />
          <Show
            title={"American Horror Story"}
            img={
              "https://media.vanityfair.com/photos/5b27be5ac5251462a0769fc5/16:9/w_2000,h_1125,c_limit/emma-roberts-ahs%20(1).jpg"
            }
            score={4.5}
          />
          <Show
            title={"Black Mirror"}
            img={
              "https://m.media-amazon.com/images/M/MV5BMTAxMzM1Mjg1NDNeQTJeQWpwZ15BbWU4MDc3MTc5NDQz._V1_.jpg"
            }
            score={4.5}
          />
          <Show
            title={"WandaVision"}
            img={
              "https://ventsmagazine.com/wp-content/uploads/2021/03/wandavision-colapso-disney.jpg"
            }
            score={4.5}
          /> */}
          {data.shows.map((s) => {
            return (
              <Show title={s.title} img={s.img} score={s.score} key={s.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
