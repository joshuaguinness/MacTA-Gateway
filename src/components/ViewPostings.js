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

class FilterDropdowns extends React.Component {

	constructor(props){
		super(props);
		this.state = { depts : [
  		'Chemistry and Chemical Biology',
  		'Computing and Software',
  		'Economics',
  		'English and Cultural Studies',
  		'Engineering',
		],

		hours : [
  		'0-5',
  		'5-10',
  		'15-20',
  		'Full Time',
		],

		responsibilities : [
  		'Project/Lab Development',
  		'Tutorial Instruction',
  		'Equiptment Maintenence',
  		'Invigillating',
		],

		deptName : [],
		numHours : [],
		respList : [],
		SL : false };

		this.handleDeptChange = this.handleDeptChange.bind(this);
		this.handleHoursChange = this.handleHoursChange.bind(this);
		this.handleRespChange = this.handleRespChange.bind(this);
		this.handleSLChange = this.handleSLChange.bind(this);
	}

	handleDeptChange(e) {
		this.setState({deptName: e.target.value})
		this.props.updateDeptFilter(e.target.value)
	}
	handleHoursChange(e) {
		this.setState({numHours: e.target.value})
		//this.props.updateDeptFilter(e.target.value)
	}
	handleRespChange(e) {
		this.setState({respList: e.target.value})
		//this.props.updateDeptFilter(e.target.value)
	}
	handleSLChange(e) {
		this.setState({SL: e.target.value})
		//this.props.updateDeptFilter(e.target.value)
	}

	render() {
		return (
			<div>
				<div className="dSpacing">
					<FormControl className="spacingControl">
						<InputLabel id="dept-label">Department</InputLabel>
						<Select labelId="dept-label" multiple
			          	input={<Input />}
			          	value={this.state.deptName}
			          	onChange={this.handleDeptChange}
			          	renderValue={(selected) => selected.join(', ')}
			          	>
							{this.state.depts.map((name) => (
				   			 	<MenuItem key={name} value={name} >
		              				<Checkbox checked={this.state.deptName.indexOf(name) > -1} />
		              				<ListItemText primary={name} />
		            			</MenuItem>
				  			))}
						</Select>
					</FormControl>
				
					<FormControl className="spacingControl">
						<InputLabel id="hours-label">Weekly Hours</InputLabel>
						<Select labelId="hours-label" multiple
			          	input={<Input />}
			          	value={this.state.numHours}
			          	onChange={this.handleHoursChange}
			          	renderValue={(selected) => selected.join(', ')}
			          	>
							{this.state.hours.map((name) => (
				   			 	<MenuItem key={name} value={name} >
		              				<Checkbox checked={this.state.numHours.indexOf(name) > -1} />
		              				<ListItemText primary={name} />
		            			</MenuItem>
				  			))}
						</Select>
					</FormControl>

					<FormControl className="spacingControl">
						<InputLabel id="resp-label">Responsibilities</InputLabel>
						<Select labelId="resp-label" multiple
			          	input={<Input />}
			          	value={this.state.respList}
			          	onChange={this.handleRespChange}
			          	renderValue={(selected) => selected.join(', ')}
			          	>
							{this.state.responsibilities.map((name) => (
				   			 	<MenuItem key={name} value={name} >
		              				<Checkbox checked={this.state.respList.indexOf(name) > -1} />
		              				<ListItemText primary={name} />
		            			</MenuItem>
				  			))}
						</Select>
					</FormControl>

					<FormControl className="spacingControl">
						<InputLabel id="resp-label">Shortlist Only?</InputLabel>
						<Select labelId="resp-label" 
			          	input={<Input />}
			          	value={this.state.SL}
			          	onChange={this.handleSLChange}
			          	>
				   			<MenuItem value={false}> No </MenuItem>
				   			<MenuItem value={true}> Yes </MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		);
	}
}

class ViewPostings extends React.Component {

  constructor(props) {
  	super(props);
  	this.changeCurrentDetails = this.changeCurrentDetails.bind(this)
  	this.updateDeptFilter = this.updateDeptFilter.bind(this)
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

  updateDeptFilter(e) {
  	console.log(e)
  }

  render() {
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<Grid container spacing={0}>
        		<Grid item xs={12}>
        			<Box component="div" className="pOutline filters">
        				<FilterDropdowns updateDeptFilter={this.updateDeptFilter}/>
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