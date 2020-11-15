import React from "react";
import './ListAppProf.css';
import ReviewApplications from "./ReviewApplications.js";
import {Box} from '@material-ui/core';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";


class ListAppProf extends React.Component {
  render() {
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<Router>
      			<NavLink exact to="/reviewapplications1P13">
            		ENGINEER 1P13
          		</NavLink>
          		<Route exact path="/reviewapplications#1P13">
            		<ReviewApplications />
          		</Route>
      		</Router>
      	</Box>
      </Box>
    );
  }
}

export default ListAppProf;