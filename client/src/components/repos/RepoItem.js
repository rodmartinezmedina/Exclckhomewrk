import React, { useEffect, useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";
import Contributors from "react-contributors";

const RepoItem = ({ repo }) => {
  const githubContext = useContext(GithubContext);
  // const { getRepoContributors, contributors } = githubContext;
  // useEffect(() => {
  //   getRepoContributors(repo.full_name);
  // }, []);

  return (
    <div className="card">
      <h1>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h1>

      {repo.description && (
        <p>
          <strong>Description: </strong>
          {repo.description}
        </p>
      )}
      <p></p>

      {repo.language && (
        <p>
          <strong>Language: </strong>
          {repo.language}
        </p>
      )}

      {/* {contributors.map((contr) => (
        <div key={contr.id} className="contributor item">
          <h3>{contr.login}</h3>
        </div>
      ))} */}
      <div>
        <h4>Contributors</h4>
        <Contributors
          owner={repo.owner.login}
          repo={repo.name}
          className="contributors-container"
        />
      </div>
    </div>
  );
};

export default RepoItem;
