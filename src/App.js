import React from "react";
import "./App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import CreatePosting from "./components/CreatePosting.js";
import ViewPostings from "./components/ViewPostings.js";
import ReviewApplications from "./components/ReviewApplications.js";
import Profile from "./components/Profile.js";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavLink exact to="/createposting">
            Create Posting
          </NavLink>
          <NavLink exact to="/viewpostings">
            View Postings
          </NavLink>
          <NavLink exact to="/reviewapplications">
            Review Applications
          </NavLink>
          <NavLink exact to="/profile">
            Profile
          </NavLink>

          <Route exact path="/createposting">
            <CreatePosting />
          </Route>
          <Route exact path="/viewpostings">
            <ViewPostings />
          </Route>
          <Route exact path="/reviewapplications">
            <ReviewApplications />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
