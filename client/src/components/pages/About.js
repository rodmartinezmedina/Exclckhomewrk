import React, { Fragment } from "react";

const About = ({ iconGithub, iconLinkedin, iconWebsite }) => {
  return (
    <div id="about-container">
      <h1> About this app </h1>
      <p>
        {" "}
        <strong> ExoClick, Adworld Homework / Challenge </strong>{" "}
      </p>
      <h3>Instructions of use</h3>
      <p>Search for any Github user in the Home Page.</p>
      <p>
        Click on 'more info' button to get more detailed user's info, including
        repositoriess
      </p>
      <h3>About user's repos info display</h3>
      <p>
        When choosing to display more info about the user, user's repos will be
        displayed
      </p>
      <p>
        If user's repo has info about its description, contributors and
        languages spectifications, then the info will be displayed. If user's
        repo has no info for the mentioned items, no info will be displayed.
      </p>

      <br />

      <h4>API used: </h4>
      <a
        href="https://developer.github.com/v3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://developer.github.com/v3/
      </a>

      <hr />
      <br />
      <h2>About me</h2>
      <h3>I'm Rodrigo Martinez M.</h3>
      <p>
        A Junior FullStack MERN developer based in Barcelona, Catalunya/Spain
        and an enthusiast of new techs in web development
      </p>
      <p>
        I was a Graphic Designer and a Music Composer, Arranger, Session
        Musician before becoming a full time Developer.
      </p>

      <a
        href="https://rodmartinezmedina.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <i className={iconWebsite} />
        Personal Website
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigo-martinez-medina/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark"
      >
        <i className={iconLinkedin} />
        My Linkedin
      </a>
      <a href="mailto: rodmartinezmedina@gmail.com">
        rodmartinezmedina@gmail.com
      </a>
    </div>
  );
};

About.defaultProps = {
  iconGithub: "fab fa-github",
  iconLinkedin: "fab fa-linkedin",
  iconWebsite: "fas fa-globe",
};

export default About;
