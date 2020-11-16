import React from "react";
import "./App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import CreatePosting from "./components/CreatePosting.js";
import ViewPostings from "./components/ViewPostings.js";
import ListAppProf from "./components/ListAppProf.js";
import ReviewApplications from "./components/ReviewApplications.js";
import ApplyPosition from "./components/ApplyPosition.js";
import Profile from "./components/Profile.js";
import ScheduleInterview from "./components/ScheduleInterview.js";
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
          <NavLink exact to="/applyposition">
            Apply for Position
          </NavLink>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
          <NavLink exact to="/scheduleinterview">
            Schedule Interview
          </NavLink>

          <Route exact path="/createposting">
            <CreatePosting />
          </Route>
          <Route exact path="/viewpostings">
            <ViewPostings />
          </Route>
          <Route exact path="/reviewapplications">
            <ListAppProf />
          </Route>
          <Route exact path="/applyposition">
            <ApplyPosition />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/reviewapplications1P13">
            <ReviewApplications />
          </Route>
          <Route exact path="/scheduleinterview">
            <ScheduleInterview />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
