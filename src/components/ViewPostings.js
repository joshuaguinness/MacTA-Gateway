import React from "react";
import './ViewPostings.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class Thumbnail extends React.Component {
	render() {
		return(
			<div>
         		{this.props.posts.map(
         		({id, title, dept}) =>
         			<div key={id}>
         				<p> {title} </p>
         			</div>
         		)}
         	</div>
		);
	}
}

class PostDetails extends React.Component {
	rednder() {
		return(
			<div>
			</div>
		);
	}
}

class ViewPostings extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {posts: [{id: 0,
  			 title: "ENGINEER 1P13 EPIC Lab IAI",
  			 dept: "Faculty of Engineering"},

  			 {id: 1,
  			 title: "ENGINEER 1P13 EPIC Lab IAI",
  			 dept: "Faculty of Engineering"}

  			]};
  }

  render() {
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<Grid container spacing={0}>
        		<Grid item xs={12}>
        			<Box component="div" className="pOutline filters">Filters</Box>
        		</Grid>
        		<Grid item xs={4}>
         			<Box component="div" className="pOutline posts">Posts
         				<Thumbnail posts={this.state.posts} />
         			</Box>
        		</Grid>
        		<Grid item xs={8}>
        			<Box component="div" className="pOutline details">Details</Box>
        		</Grid>
      		</Grid>
      	</Box>
      </Box>
    );
  }
}

export default ViewPostings;
