import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import CreatePosting from "./components/CreatePosting.js";
import ViewPostings from "./components/ViewPostings.js";
import ApplyPosition from "./components/ApplyPosition.js";
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
          <NavLink exact to="/applyposition">
            Apply for Position
          </NavLink>

          <Route exact path="/createposting">
            <CreatePosting />
          </Route>
          <Route exact path="/viewpostings">
            <ViewPostings />
          </Route>
          <Route exact path="/applyposition">
            <ApplyPosition />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
