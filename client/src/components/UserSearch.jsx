import { useEffect, useState } from "react";
import Search from "./Search";
import getAllShows from "../functions/getAllShows";
import { SwapSpinner } from "react-spinners-kit";

function UserSearch() {
  const [loading, setLoading] = useState(false);

  return loading === true ? (
    <div className="py-10 w-full flex flex-row place-content-center">
      <SwapSpinner size={60} loading={true} />
    </div>
  ) : (
    <div className="w-full">
      <div>
        <div className="flex flex-col justify-center">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
