import React from "react";
import './ReviewApplications.css';
import {Box} from '@material-ui/core';
import ListAppProf from "./ListAppProf.js";
import {NavLink } from "react-router-dom";


class ReviewApplications extends React.Component {
  render() {
  	console.log("hello")
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<NavLink exact to="/reviewapplications">
            	Back to List
          	</NavLink>
      	</Box>
      </Box>
    );
  }
}

export default ReviewApplications;