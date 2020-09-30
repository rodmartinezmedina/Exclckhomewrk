import React, { useEffect, useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";

const RepoItem = ({ match, repo }) => {
  const githubContext = useContext(GithubContext);

  const {
    getRepoContributors,
    loading,
    user,
    repos,
    getUserRepos,
  } = githubContext;

  useEffect(() => {
    getUserRepos(match.params.login);
    getRepoContributors(repo.owner.login, repo.name);
  }, []);

  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>

      {repo.contributors_url && (
        <>
          <div className="">
            <h4>Contributors</h4>
          </div>
          <p>All contributors: {repo.contributors_url}</p>
        </>
      )}
      {repo.description && (
        <>
          <h4>Description</h4>
          <p>{repo.description}</p>
        </>
      )}

      {repo.language && (
        <p>
          <strong>Language: </strong>
          {repo.language}
        </p>
      )}
    </div>
  );
};

export default RepoItem;
