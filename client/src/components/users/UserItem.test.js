import React from "react";

import { mount } from "enzyme";
import { render, fireEvent, cleanup } from "@testing-library/react";
import USerItem from "./UserItem";

jest.mock("../../contexts/github/GithubState", () => {
  const React = require("react");
  const GithubState = require("../../contexts/github/GithubState").default;

  const GithubContext = React.createContext(GithubState);
  return {
    GithubContext,
  };
});

// import GithubState from "../../contexts/github/GithubState";
// import githubContext from "../../contexts/github/githubContext";

afterEach(cleanup);

const renderComponent = ({ login }) => {
  return render(<UserItem login={login} />);
};

test("test UserItem", () => {
  const { login } = renderComponent({ login: { login } });
});

// describe("<Users />", () => {
//   it("Test to look if something inside <UserItem />", () => {
//     // const githubContext = useContext(GithubContext);
//     // const { users } = githubContext;
//     const wrapper = mount(
//       <GithubState>
//         <UserItem />
//       </GithubState>
//     );
//     // wrapper.setState({ users: { users } });
//     expect(wrapper).to.contain(<h2>{login}</h2>);
//   });
// });
