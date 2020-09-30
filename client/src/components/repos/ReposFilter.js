import React, { useContext, useEffect, useRef } from "react";
import GithubContext from "../../contexts/github/githubContext";

const ReposFilter = () => {
  const githubContext = useContext(GithubContext);
  const text = useRef("");

  const { filterRepos, clearFilterRepos, filteredRepos } = githubContext;

  useEffect(() => {
    if (filteredRepos === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterRepos(e.target.value);
    } else {
      clearFilterRepos();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter User's Repos..."
        onChange={onChange}
      />
    </form>
  );
};

export default ReposFilter;
