import React, { useEffect, useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";

const RepoItem = ({ repo }) => {
  const githubContext = useContext(GithubContext);

  const { getRepoContributors, contributors } = githubContext;

  useEffect(() => {
    getRepoContributors(repo.full_name);
  }, [repo.owner.login]);

  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <h4>{repo.collaborators_url}</h4>
      {contributors.map((contr) => (
        <div key={contr.id} className="contributor item">
          <h3>{contr.login}</h3>
        </div>
      ))}

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
    </div>
  );
};

export default RepoItem;
