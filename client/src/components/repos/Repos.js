import React, { useContext, useEffect, useState } from "react";
import RepoItem from "./RepoItem";
import RepoItemPacha from "./RepoItemPacha";
import GithubContext from "../../contexts/github/githubContext";
import Spinner from "../layout/Spinner";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  // const [repoContributors, setRepoContributors] = useState();

  const {
    repos,
    filteredRepos,
    loading,
    // contributors,
    // getRepoContributors,
  } = githubContext;

  if (repos !== null && repos.length === 0 && !loading) {
    return <h4>No repos to show</h4>;
  }

  return (
    <div className="text-center">
      <>
        {repos !== null && !loading ? (
          <div>
            {filteredRepos !== null
              ? filteredRepos.map((repo) => (
                  <div key={repo.id} className="item">
                    <RepoItem repo={repo} />
                  </div>
                ))
              : repos.map((repo) => (
                  <div key={repo.id} className="item">
                    {/* {contributors && setRepoContributors(contributors)}
                    {repo && getRepoContributors(repo.contributors_url)}
                    {contributors.map((contr) => (
                      <div key={contr.id} className="item">
                        <h3>{contr.login}</h3>
                      </div>
                    ))} */}
                    <RepoItem repo={repo} />
                  </div>
                ))}
          </div>
        ) : (
          <Spinner />
        )}
      </>
    </div>
  );
};

export default Repos;
