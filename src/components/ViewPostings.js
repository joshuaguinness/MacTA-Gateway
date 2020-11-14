import React from "react";
import './ViewPostings.css';
import {Grid, Box, Button, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText, Input  } from '@material-ui/core';

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



function FilterDropdowns() {
  	const [deptName, setDeptName] = React.useState([]);
  	const [hrs, setHrs] = React.useState([]);
  	const [resp, setResp] = React.useState([]);

  	const depts = [
  		'Department of Chemistry and Chemical Biology',
  		'Department of Computing and Software',
  		'Department of Economics',
  		'Department of English and Cultural Studies',
  		'Faculty of Engineering',
	];

	const hours = [
  		'0-5',
  		'5-10',
  		'15-20',
  		'Full Time',
	];

	const responsibilities = [
  		'Project/Lab Development',
  		'Tutorial Instruction',
  		'Equiptment Maintenence',
  		'Invigillating',
	];

  	const handleChangeDept = (event) => {
    	setDeptName(event.target.value);
  	};

  	const handleChangeHrs = (event) => {
    	setHrs(event.target.value);
  	};

  	const handleChangeResp = (event) => {
    	setResp(event.target.value);
  	};

	return (
		<div>
		<div className="dSpacing">
		<FormControl className="spacingControl">
			<InputLabel id="dept-label">Department</InputLabel>
			<Select labelId="dept-label" multiple
          	value={deptName}
          	onChange={handleChangeDept}
          	input={<Input />}
          	renderValue={(selected) => selected.join(', ')}>
				{depts.map((name) => (
	   			 <MenuItem key={name} value={name}>
	      			<Checkbox checked={deptName.indexOf(name) > -1} />
	      			<ListItemText primary={name} />
	    		</MenuItem>
	  			))}
			</Select>
			</FormControl>
			<FormControl className="spacingControl">
			<InputLabel id="hr-label">Hours</InputLabel>
			<Select labelId="hr-label" multiple
          	value={hrs}
          	onChange={handleChangeHrs}
          	input={<Input />}
          	renderValue={(selected) => selected.join(', ')}>
				{hours.map((name) => (
	   			 <MenuItem key={name} value={name}>
	      			<Checkbox checked={hrs.indexOf(name) > -1} />
	      			<ListItemText primary={name} />
	    		</MenuItem>
	  			))}
			</Select>
			</FormControl>
			<FormControl className="spacingControl">
			<InputLabel id="resp-label">Responsibilities</InputLabel>
			<Select labelId="resp-label" multiple
          	value={resp}
          	onChange={handleChangeResp}
          	input={<Input />}
          	renderValue={(selected) => selected.join(', ')}>
				{responsibilities.map((name) => (
	   			 <MenuItem key={name} value={name}>
	      			<Checkbox checked={resp.indexOf(name) > -1} />
	      			<ListItemText primary={name} />
	    		</MenuItem>
	  			))}
			</Select>
			</FormControl>
			<FormControl className="spacingControl">
			<InputLabel id="sl-label">Shortlist Only</InputLabel>
			<Select labelId="sl-label">
				<MenuItem value={false}>No</MenuItem>
	  			<MenuItem value={true}>Yes</MenuItem>
	  			
			</Select>
			</FormControl>
		</div>
		</div>
	);
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
  			 resp: "Tutorial Instruction, Invigillating, Project/Lab Development, Equiptment Maintenence",
  			 desc: "placeholder",
  			 shortlist: false},

  			 {id: 1,
  			 title: "English 2AA3 Teaching Assistant",
  			 dept: "Department of English and Cultural Studies",
  			 hours: "5-10",
  			 resp: "Tutorial Instruction, Invigillating",
  			 desc: "placeholder",
  			 shortlist: false}
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
        			<Box component="div" className="pOutline filters">
        				<FilterDropdowns />
        			</Box>
        		</Grid>
        		<Grid item xs={4}>
         			<Box component="div" className="pOutline posts">
         				<Thumbnail posts={this.state.posts} displayDetails={this.changeCurrentDetails} />
         			</Box>
        		</Grid>
        		<Grid item xs={8}>
        			<Box component="div" className="pOutline details"> test
        				<PostDetails cDetails={this.state.currDetails} />
        			</Box>
        		</Grid>
      		</Grid>
      	</Box>
      </Box>
    );
  }
}

export default ViewPostings;