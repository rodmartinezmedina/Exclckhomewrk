import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, name, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "70px" }}
        alt="user-img"
      />

      <h3>Username</h3>
      <h2>{login}</h2>
      <div>
        <Link to={`user/${login}`} className="btn">
          More Info
        </Link>
      </div>

      <div>
        <a
          href={html_url}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github page
        </a>
      </div>
    </div>
  );
};

export default UserItem;
