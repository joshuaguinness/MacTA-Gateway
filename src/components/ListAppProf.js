import React from "react";
import './ListAppProf.css';
import {Box, Button, Grid} from '@material-ui/core';
import {NavLink} from "react-router-dom";


class ListAppProf extends React.Component {
  render() {
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<Grid className="FixPadding" container spacing={3}>
      			<Grid item xs={12}>
      				<h2 className="Title"> Your Postings: </h2>
      			</Grid>
      			<Grid item xs={12}>
      				<NavLink className="linkText" exact to="/reviewapplications1P13">
      					<Button className="linkButton" variant="contained">
            				ENGINEER 1P13
            			</Button>
          			</NavLink>
          		</Grid>
          	</Grid>
      	</Box>
      </Box>
    );
  }
}

export default ListAppProf;