import React from "react";
import './ViewPostings.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class ViewPostings extends React.Component {
  render() {
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<Grid container spacing={0}>
        		<Grid item xs={12}>
        			<Paper class="pOutline filters" variant="outlined" square>Filters</Paper>
        		</Grid>
        		<Grid item xs={4}>
         			<Paper class="pOutline posts" variant="outlined" square>Posts</Paper>
        		</Grid>
        		<Grid item xs={8}>
        			<Paper class="pOutline details" variant="outlined" square>Details</Paper>
        		</Grid>
      		</Grid>
      	</Box>
      </Box>
    );
  }
}

export default ViewPostings;
