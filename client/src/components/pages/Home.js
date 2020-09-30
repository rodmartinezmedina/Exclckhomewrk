import React from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <h3>Instructions of use</h3>
        <p>Search for any Github user in the Home Page.</p>
        <br />
        <p>
          Click on 'more info' button to get more detailed user's info,
          including repositoriess
        </p>
      </div>

      <Search />
      <Users />
    </>
  );
};

export default Home;
