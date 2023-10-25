import React from "react";
import { useDebounce } from "../../hooks/useDebounce";
import useProfileStates from "../../hooks/useProfileStates";
import User from "../User/User";
import "./UserList.css";

export default function UserList() {
  const { profileStates, setProfileStates } = useProfileStates();
  const debouncedCallback = useDebounce((searchText) => 
    setProfileStates((state) => ({
      ...state,
      searchText: searchText,
    }))
  );

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search User..."
        value={profileStates.searchText}
        onChange={(e) => debouncedCallback(e.target.value)}
      />

      <div className="container mt-5">
        <div className="row g-5">
          {profileStates.githubData.length &&
            profileStates.githubData.map((user) => (
              <User key={user.id} user={user} />
            ))}
        </div>
      </div>
    </>
  );
}
