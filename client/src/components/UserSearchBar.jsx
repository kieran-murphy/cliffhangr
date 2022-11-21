import React from "react";

const UserSearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const submitSearch = () => {
    // setSearched(true);
    // setSearchTerm("");
    return;
  };

  return (
    <div className="form-control mt-5 mx-5">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search for a user…"
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={handleSearch}
          // onSubmit={submitSearch}
        />

        <button className="btn btn-squared" onClick={submitSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserSearchBar;
