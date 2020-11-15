import React from "react";
import './ListAppProf.css';
import ReviewApplications from "./ReviewApplications.js";
import {Box} from '@material-ui/core';
import {NavLink } from "react-router-dom";


class ListAppProf extends React.Component {
  render() {
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<NavLink exact to="/reviewapplications1P13">
            	ENGINEER 1P13
          	</NavLink>
      	</Box>
      </Box>
    );
  }
}

export default ListAppProf;