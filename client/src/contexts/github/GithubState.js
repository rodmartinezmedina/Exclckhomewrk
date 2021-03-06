import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  GET_CONTRIBUTORS,
  FILTER_REPOS,
  CLEAR_FILTER_REPOS,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    contributors: [],
    loading: false,
    filteredRepos: null,
    error: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    // VALUES
    // githubClientId => process.env.REACT_APP_GITHUB_CLIENT_ID
    // githubClientSecret => process.env.REACT_APP_GITHUB_CLIENT_SECRET

    //res.data.items is response from Github API
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //Get 1 User
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    console.log(`getUser     res.data`, res.data);

    dispatch({ type: GET_USER, payload: res.data });
  };

  //Get Repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=
    ${githubClientId}&client_secret=
    ${githubClientSecret}`
    );

    console.log(`getUserRepos res.data`, res.data);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Get Repo Contributors
  // const getRepoContributors = async (full_name) => {
  const getRepoContributors = async (repo_contr_url) => {
    setLoading();

    const res = await axios.get(
      // `https://api.github.com/repos/${full_name}/contributors?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      `${repo_contr_url}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    console.log(`getRepoContributors`, res.data);
    dispatch({
      type: GET_CONTRIBUTORS,
      payload: res.data,
    });
  };

  //Filter Repos
  const filterRepos = (text) => {
    dispatch({ type: FILTER_REPOS, payload: text });
  };

  //Clear Filter
  const clearFilterRepos = (text) => {
    dispatch({ type: CLEAR_FILTER_REPOS });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        contributors: state.contributors,
        filteredRepos: state.filteredRepos,
        error: state.error,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        getRepoContributors,
        filterRepos,
        clearFilterRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
