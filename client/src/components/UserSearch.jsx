import { useEffect, useState } from "react";
import UserSearchBar from "./UserSearchBar";
import UserCard from "./UserCard";
import axios from "axios";
import getAllUsers from "../functions/getAllUsers";
import getSearchUser from "../functions/getSearchUser";
import { SwapSpinner } from "react-spinners-kit";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [searched, setSearched] = useState(false);

  useEffect(() => {
    const search = async () => {
      try {
        if (!searchTerm.trim()) {
          setUsers([]);
          return;
        }
        const res = await axios.get(`/users/${searchTerm}`);
        if (res.data.user) {
          setUsers([res.data.user]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [searchTerm]);

  return loading === true ? (
    <div className="py-10 w-full flex flex-row place-content-center">
      <SwapSpinner size={60} loading={true} />
    </div>
  ) : (
    <div className="w-full">
      <div>
        <div className="flex flex-col justify-center">
          <UserSearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            // setSearched={setSearched}
          />
          {users.map((user) => {
            return <UserCard user={user} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
