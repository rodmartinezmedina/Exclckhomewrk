import React, { useContext } from "react";
import UserItem from "../users/UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../contexts/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users-container">
        <div id="users-inside">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
