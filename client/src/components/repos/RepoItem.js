import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <h4>{repo.collaborators_url}</h4>

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
