import React, { useEffect, useContext, useState } from "react";
import GithubContext from "../../contexts/github/githubContext";

const RepoItemPacha = ({ repo }) => {
  const githubContext = useContext(GithubContext);

  const [repoContributors, setRepoContributors] = useState();

  const { getRepoContributors, contributors, repos } = githubContext;

  // useEffect(() => {
  //   if (repo) {
  //     getRepoContributors(repo.contributors_url);
  //     console.log(
  //       `getRepoContributors(repo.contributors_url)`,
  //       getRepoContributors(repo.contributors_url)
  //     );
  //   }
  // }, [repo]);

  // useEffect(() => {
  //   if (contributors) {
  //     setRepoContributors(contributors);
  //   }
  // }, []);

  // let theContributors = [getRepoContributors(repo.full_name)];

  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <h4>{repo.collaborators_url}</h4>

      {/* {repoContributors &&
        repoContributors.map((contr) => (
          <div key={contr.id} className="item">
            <h3>{contr.login}</h3>
          </div>
        ))} */}

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

export default RepoItemPacha;
