import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  FILTER_REPOS,
  CLEAR_FILTER_REPOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case FILTER_REPOS:
      return {
        ...state,
        filteredRepos: state.repos.filter((repo) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return repo.name.match(regex);
        }),
      };
    case CLEAR_FILTER_REPOS:
      return {
        ...state,
        filteredRepos: null,
      };
    default:
      return state;
  }
};
