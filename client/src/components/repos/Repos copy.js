import React, { useContext, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import RepoItem from "./RepoItem";
import RepoItemPacha from "./RepoItemPacha";
import GithubContext from "../../contexts/github/githubContext";
import Spinner from "../layout/Spinner";

const Repos = () => {
  const githubContext = useContext(GithubContext);

  const [repoContributors, setRepoContributors] = useState();

  const {
    repos,
    filteredRepos,
    loading,
    contributors,
    getRepoContributors,
  } = githubContext;

  if (repos !== null && repos.length === 0 && !loading) {
    return <h4>No repos to show</h4>;
  }

  // console.log(`getRepoContributors`, getRepoContributors(repo.full_name));

  // const userReposContributors = repos.map((theRepo) => {
  //   getRepoContributors(theRepo.contributors_url);
  //   // return repoContrArray();
  // });

  return (
    <div className="text-center">
      <>
        {repos !== null && !loading ? (
          <div>
            {filteredRepos !== null
              ? filteredRepos.map((repo) => (
                  <div key={repo.id} className="item">
                    <RepoItemPacha repo={repo} />
                  </div>
                ))
              : repos.map((repo) => (
                  <div key={repo.id} className="item">
                    {repo && getRepoContributors(repo.contributors_url)}
                    {contributors.map((contr) => (
                      <div key={contr.id} className="item">
                        <h3>{contr.login}</h3>
                      </div>
                    ))}
                    <RepoItemPacha repo={repo} />
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

// const Repos = ({ repos }) => {
//   return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
// };

// export default Repos;

//WORKING THING
// import React, { useContext, useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import RepoItem from "./RepoItem";
// import GithubContext from "../../contexts/github/githubContext";
// import Spinner from "../layout/Spinner";

// const Repos = () => {
//   const githubContext = useContext(GithubContext);

//   const { repos, filteredRepos, getUserRepos, loading } = githubContext;

//   if (repos !== null && repos.length === 0 && !loading) {
//     return <h4>No repos to show</h4>;
//   }

//   return (
//     <div>
//       <>
//         {repos !== null && !loading ? (
//           <TransitionGroup>
//             {filteredRepos !== null
//               ? filteredRepos.map((repo) => (
//                   <CSSTransition key={repo.id} timeout={300} classNames="item">
//                     <RepoItem repo={repo} />
//                   </CSSTransition>
//                 ))
//               : repos.map((repo) => (
//                   <CSSTransition key={repo.id} timeout={300} classNames="item">
//                     <RepoItem repo={repo} />
//                   </CSSTransition>
//                 ))}
//           </TransitionGroup>
//         ) : (
//           <Spinner />
//         )}
//       </>
//     </div>
//   );
// };
