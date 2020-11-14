import React from "react";
import './ViewPostings.css';
import {Grid, Box, Button} from '@material-ui/core';

class Thumbnail extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		console.log(e)
		this.props.displayDetails(e.currentTarget.dataset.index)
	}

	render() {
		return(
			<div>
         		 {this.props.posts.map(
         		 ({id, title, dept, desc, hours, resp}) =>
         			<Button key={id} data-index={id} onClick={this.handleChange}>
         		 		<p> {title} </p>
         				<p> {dept} </p>
         		 	</Button>
         		 )}
         	</div>
		);
	}
}

class PostDetails extends React.Component {
	render() {
		return(
			<div>
			{this.props.cDetails.map(
         		({id, title, dept, desc, hours, resp}) =>
         			<div key={id}>
         				<p> {title} </p>
         				<p> {desc} </p>
         				<p> {hours} </p>
         				<p> {resp} </p>
         			</div>
         		)}
			</div>
		);
	}
}

class ViewPostings extends React.Component {

  constructor(props) {
  	super(props);
  	this.changeCurrentDetails = this.changeCurrentDetails.bind(this)
  	this.state = {posts: [
  			{id: 0,
  			 title: "ENGINEER 1P13 EPIC Lab IAI",
  			 dept: "Faculty of Engineering",
  			 hours: "Full Time",
  			 resp: "Code",
  			 desc: "placeholder"},

  			 {id: 1,
  			 title: "ENGINEER 1P13 EPIC Lab IAI",
  			 dept: "Faculty of Engineering",
  			 hours: "Part Time",
  			 resp: "CAD",
  			 desc: "placeholder"}
  			],

  				currDetails: []};


  	let postsHolder = this.state.posts;
  	let detailsHolder = this.state.currDetails;
  	detailsHolder[0] = postsHolder[0];
  	this.setState({detailsHolder});
  }

  changeCurrentDetails(id) {
  	console.log(id)
  	let postsHolder = this.state.posts;
  	let detailsHolder = this.state.currDetails;
  	detailsHolder[0] = postsHolder[id];
  	this.setState({detailsHolder});
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
         				<Thumbnail posts={this.state.posts} displayDetails={this.changeCurrentDetails} />
         			</Box>
        		</Grid>
        		<Grid item xs={8}>
        			<Box component="div" className="pOutline details">Details
        				<PostDetails cDetails={this.state.currDetails} />
        				test
        			</Box>
        		</Grid>
      		</Grid>
      	</Box>
      </Box>
    );
  }
}

export default ViewPostings;
