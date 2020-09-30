import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import ReposFilter from "../repos/ReposFilter";
import { Link } from "react-router-dom";
import GithubContext from "../../contexts/github/githubContext";

const User = ({ match, iconGithub }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className="userpage-container">
      <Link to="/" className="btn btn-dark">
        Back to search
      </Link>
      <div className="card grid-2">
        <div className="user-left-col all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="github user"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location : {location}</p>

          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-secondary">Following: {following}</div>
            <div className="badge badge-dark">
              Public Repos: : {public_repos}
            </div>
          </div>
        </div>

        <div className="user-right-col">
          <ul>
            <li>
              {bio && (
                <>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </>
              )}
            </li>

            <li>
              {login && (
                <>
                  <h3>Username</h3>
                  {login}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong>
                  <a href={blog}>{blog}</a>
                </>
              )}
            </li>
            <li>
              <a href={html_url} className="btn ">
                <i className={iconGithub} />
                Visit Github Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ReposFilter />
      <Repos repos={repos} />
    </div>
  );
};

export default User;
