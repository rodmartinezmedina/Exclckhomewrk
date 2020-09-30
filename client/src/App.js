import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./contexts/github/GithubState";
import AlertState from "./contexts/alert/AlertState";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import About from "./components/pages/About";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="exoClick-Task" icon="fab fa-github" />
            <div className="big-container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:login" component={User} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
