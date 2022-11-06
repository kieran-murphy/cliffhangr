import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayRating from "./DisplayRating";
import getShow from "../functions/getShow";

const SmallReview = ({ id, score }) => {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShow(id, setShow, setLoading);
    return;
  }, [loading]);

  return (
    <Link to={`../cliffhangr/show/${id}`}>
      <div className="card card-side bg-base-100 shadow-xl mb-4 h-26">
        <figure>
          <img src={show.img} alt={show.title} className="w-40 h-full" />
        </figure>
        <div className="card-body flex">
          <p className="font-semibold">{show.title}</p>
          <DisplayRating score={score} size={16} />
        </div>
      </div>
    </Link>
  );
};

export default SmallReview;
