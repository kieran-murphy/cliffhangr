import { useEffect, useState } from "react";
import Search from "./Search";
import getAllUsers from "../functions/getAllUsers";
import { SwapSpinner } from "react-spinners-kit";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getAllUsers(setUsers, setLoading);
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
          {users.map((u) => {
            return (
              <h1>{u.name}</h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
