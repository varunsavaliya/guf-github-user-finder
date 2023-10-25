import React from "react";
import "./User.css";

export default function User({user}) {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img src={user.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <a target="_blank" href={user.github_url} className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
