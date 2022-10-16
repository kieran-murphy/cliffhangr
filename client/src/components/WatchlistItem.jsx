import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getShow from "../functions/getShow";

const WatchlistItem = ({ id }) => {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShow(id, setShow, setLoading);
    return;
  }, [loading]);

  return (
    <Link to={`../cliffhangr/show/${id}`}>
      <div className="card card-side bg-base-100 shadow-xl mb-4 h-24">
        <figure>
          <img src={show.img} alt={show.title} className="w-40" />
        </figure>
        <div className="card-body flex">
          <p className="font-semibold">{show.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default WatchlistItem;
