import React from "react";
import './ViewPostings.css';
import ApplyPosition from "./ApplyPosition.js"
import {Grid, Box, Button, Select, MenuItem, 
	InputLabel, FormControl, Checkbox, ListItemText, Input, Tabs, Tab, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";

function TabPanel(props) {
	  const { children, value, index, ...other } = props;

	  return (
	    <div
	      role="tabpanel"
	      hidden={value !== index}
	      id={`vertical-tabpanel-${index}`}
	      aria-labelledby={`vertical-tab-${index}`}
	      {...other}
	    >
	      {value === index && (
	        <Box p={3}>
	          <Typography>{children}</Typography>
	        </Box>
	      )}
	    </div>
	  );
	}


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

class Thumbnail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {posts: [
  			{id: 0,
  			 title: "CHEM 1A03 Teaching Assistant",
  			 ts: "CHEM1A03",
  			 dept: "Faculty of Science, Department of Chemistry and Chemical Biology",
  			 hours: "15-20",
  			 resp: "Tutorial Instruction, Invigillating, Equiptment Maintenence, Marking",
  			 desc: "placeholder",
  			 skills: "Communication Skills",
  			 shortlist: false,
  			 message: "Add to Shortlist",
  			 bgColor: "lightgray"},

  			 {id: 1,
  			 title: "COMPSCI 2XA3 Teaching Assistant",
  			 ts: "COMPSCI2XA3",
  			 dept: "Faculty of Engineering, Department of Computing and Software",
  			 hours: "10-15",
  			 resp: "Tutorial Instruction, Invigillating",
  			 skills: "Communication Skills, Coding, Git and Version Control",
  			 desc: "placeholder",
  			 shortlist: false,
  			 message: "Add to Shortlist",
  			 bgColor: "lightgray"},

  			 {id: 2,
  			 title: "COMPSCI 2XB3 Teaching Assistant",
  			 ts: "COMPSCI2XB3",
  			 dept: "Faculty of Engineering, Department of Computing and Software",
  			 hours: "10-15",
  			 resp: "Tutorial Instruction, Invigillating, Marking",
  			 skills: "Communication Skills, Coding, Git and Version Control",
  			 desc: "placeholder",
  			 shortlist: false,
  			 message: "Add to Shortlist",
  			 bgColor: "lightgray"},

  			 {id: 3,
  			 title: "ECON 1B03 Teaching Assistant",
  			 ts: "ECON1B03",
  			 dept: "DeGroote School of Business, Department of Economics",
  			 hours: "5-10",
  			 resp: "Tutorial Instruction, Invigillating, Marking",
  			 skills: "Communication Skills, Financial knowledge",
  			 desc: "placeholder",
  			 shortlist: false,
  			 message: "Add to Shortlist",
  			 bgColor: "lightgray"},

  			 {id: 4,
  			 title: "ENGINEER 1P13 EPIC Lab IAI",
  			 ts: "ENGINEER1P13",
  			 dept: "Faculty of Engineering",
  			 hours: "Full Time",
  			 resp: "Tutorial Instruction, Invigillating, Project/Lab Development, Equiptment Maintenence, Marking",
  			 desc: "The Epic Lab is an experiential laboratory designed to allow first year students the chance to have hands on experience with the topics discussed in the 1P13 course. This includes Engineering Design, Software Engineering and Materials Engineering. You will be reporting to multiple professors within the faculty of Engineering during your time as an instructor.  ",
  			 skills: "Communication Skills, Coding, CAD Design, Sketching",
  			 shortlist: false,
  			 message: "Add to Shortlist",
  			 bgColor: "lightgray"},

  			 {id: 5,
  			 title: "ENGLISH 1AA3 Teaching Assistant",
  			 ts: "ENGLISH1AA3",
  			 dept: "Faculty of Humanities, Department of English and Cultural Studies",
  			 hours: "0-5",
  			 resp: "Tutorial Instruction, Invigillating, Marking",
  			 desc: "placeholder",
  			 skills: "Communication Skills, Grammar, Reading, Writing",
  			 shortlist: false,
  			 message: "Add to Shortlist",
  			 bgColor: "lightgray"},

  			 {id: 6,
  			 title: "SFWRENG 2FA3 – Discrete Math II",
  			 ts: "SFWRENG2FA3",
  			 dept: "Faculty of Engineering, Department of Computing and Software",
  			 hours: "5-10",
  			 resp: "Tutorial Instruction, Invigillating",
  			 desc: "placeholder",
  			 skills: "Communication Skills, Grammar, Reading, Writing",
  			 shortlist: false,
  			 message: "Add to Shortlist",
  			 bgColor: "lightgray"}
  			],
  			value : 0}

		this.handleChange = this.handleChange.bind(this)
		this.updateSlVal = this.updateSlVal.bind(this)
	}

	useStyles = makeStyles((theme) => ({
	  root: {
	    flexGrow: 1,
	    backgroundColor: theme.palette.background.paper,
	    display: 'flex',
	    height: 224,
	  },
	  tabs: {
	    borderRight: `2px solid ${theme.palette.divider}`,
	  },
	}));

	handleChange(e) {
		var parsed = parseInt(e.currentTarget.dataset.index, 10)
  		console.log(parsed)
  		this.setState({value: parsed})
	}

	updateSlVal(e) {
  		let postHolder = this.state.posts;

  		if(postHolder[e]['shortlist']) {
  			postHolder[e]['message'] = "Add To Shortlist"
  			postHolder[e]['bgColor'] = "lightgray"
  		}
  		if(!postHolder[e]['shortlist']) {
  			postHolder[e]['message'] = "Remove From Shortlist"
  			postHolder[e]['bgColor'] = "lightblue"
  		}

  		postHolder[e]['shortlist'] = !postHolder[e]['shortlist']

  		this.setState({postHolder})
  	}

	render() {

		var temp = this.state.posts
		var toShow = [];
		var deptFilters = this.props.deptFilters;
		var hoursFilters = this.props.hoursFilters;
		var respFilters = this.props.respFilters;
		var onSL = this.props.SLFilters;

			deptFilters.forEach(function(name){
				toShow = toShow.concat(temp.filter(posts => posts.dept.includes(name) === true));
			});

			hoursFilters.forEach(function(name){
				toShow = toShow.concat(temp.filter(posts => posts.hours.includes(name) === true));
			});

			respFilters.forEach(function(name){
				toShow = toShow.concat(temp.filter(posts => posts.resp.includes(name) === true));
			});

		if(toShow.length === 0) toShow = toShow.concat(this.state.posts);

		if(onSL) toShow = toShow.filter(posts => posts.shortlist === true);

		return(
         	<div className = "alignMe2">
      			 <div className="test3">
          			<Tabs
          				className="test3"
          				orientation="vertical"
          				variant="scrollable"
          				value={this.state.value}
   						onChange={this.handleChange}
          				className={this.useStyles.tabs}
      				>
      					{toShow.map(
      						({id, title}) =>
      							<Tab label={title} className="test2" data-index={id} {...a11yProps({id})} />
      						)}
      				</Tabs>
      				</div>

      			<div className="alignMe3">

				{toShow.map(
					({id, title, ts, dept, desc, hours, resp, skills, bgColor, message}) =>
						<TabPanel className="alignRight2" value={this.state.value} index={id}>
			        		<PostDetails 
        				id={id} title={title} dept={dept} desc={desc} hours={hours} resp={resp} skills={skills} bgColor={bgColor} message={message}
        				updateSlVal={this.updateSlVal}
        				ts={ts}
        				match={this.props.match}
        				/>
			      		</TabPanel>
				)}
				</div>
  			</div>
		);
	}
}

class PostDetails extends React.Component {

	constructor(props){
		super(props);
		this.toggleSl = this.toggleSl.bind(this);
	}

	toggleSl(e) {
		this.props.updateSlVal(e.currentTarget.dataset.index)
	}

	render() {

		return(
			<div className="" key={this.props.id}>

				<Grid container spacing={0}>
					<Grid item xs={12}>
     				<p className="cTitle"> <b> {this.props.title} </b> </p>
     			</Grid>
     			<Grid item xs={6}>
     				<Button className="slButton" variant="contained" key={this.props.id} data-index={this.props.id} onClick={this.toggleSl} style={{backgroundColor:this.props.bgColor}}> {this.props.message}  </Button>
     			</Grid>
     			<Grid item xs={6}>
	     				<Link exact to={`/applyposition/${this.props.ts}`}>
	     					<Button className="applyButton" variant="contained"> Apply Now! </Button>
	     				</Link>
     			</Grid>
     			<Grid item xs={12}>
     				<p className="cDescTitle"> <b> Department/Faculty: </b> </p>
     			</Grid>
     			<Grid item xs={12}>
     				<p className="cDesc"> {this.props.dept} </p>
     			</Grid>
     			<Grid item xs={12}>
     				<p className="cHoursTitle"> <b> Desctiption: </b> </p>
     			</Grid>
     			<Grid item xs={12}>
     				<p className="cDesc"> {this.props.desc} </p>
     			</Grid>
     			<Grid item xs={12}>
     				<p className="cHoursTitle"> <b> Weekly Hours: </b> </p>
     			</Grid>
     			<Grid item xs={12}>
     				<ul className="cHours">
     					<li > {this.props.hours} hours </li>
     				</ul>
     			</Grid>
     			<Grid item xs={12}>
     				<p className="cHoursTitle"> <b> Responsibilities: </b> </p>
     			</Grid>
     			<Grid item xs={12}>
     				<ul className="cResp">
     					<li > {this.props.resp} </li>
     				</ul>
					</Grid>
				</Grid>
				<Grid item xs={12}>
     				<p className="cHoursTitle"> <b> Skills Required: </b> </p>
     			</Grid>
     			<Grid item xs={12}>
     				<ul className="cResp">
     					<li > {this.props.skills} </li>
     				</ul>
				</Grid>
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
  		'Humanities',
  		'Business',
		],

		hours : [
  		'0-5',
  		'5-10',
  		'10-15',
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
		this.props.updateHoursFilter(e.target.value)
	}
	handleRespChange(e) {
		this.setState({respList: e.target.value})
		this.props.updateRespFilter(e.target.value)
	}
	handleSLChange(e) {
		this.setState({SL: e.target.value})
		this.props.updateOnSL(e.target.value)
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
  	this.updateDeptFilter = this.updateDeptFilter.bind(this)
  	this.updateRespFilter = this.updateRespFilter.bind(this)
  	this.updateHoursFilter = this.updateHoursFilter.bind(this)
  	this.updateOnSL = this.updateOnSL.bind(this)

  	this.state = {
  			deptFilters: [],
  			hoursFilters: [],
  			respFilters: [],
  			onSL: false,};
  }

  updateDeptFilter(e) {
  	console.log(e)
  	this.setState({deptFilters : e});
  }
  updateHoursFilter(e) {
  	console.log(e)
  	this.setState({hoursFilters : e});
  }
  updateRespFilter(e) {
  	console.log(e)
  	this.setState({respFilters : e});
  }
  updateOnSL(e) {
  	console.log(e)
  	this.setState({onSL : e});
  }

  render() {

    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
      		<Grid container spacing={0}>
        		<Grid item xs={12}>
        			<Box component="div" className="pOutline filters">
        				<FilterDropdowns 
        					updateDeptFilter={this.updateDeptFilter}
        					updateHoursFilter={this.updateHoursFilter}
        					updateRespFilter={this.updateRespFilter}
        					updateOnSL={this.updateOnSL}
    					/>
        			</Box>
        		</Grid>
        		<Grid item xs={12}>
         			<Box component="div" className="pOutline posts">
         				<Thumbnail 
         					posts={this.state.posts} 
         					displayDetails={this.changeCurrentDetails} 
         					deptFilters={this.state.deptFilters} 
         					hoursFilters={this.state.hoursFilters} 
         					respFilters={this.state.respFilters} 
         					SLFilters={this.state.onSL} 
         					match={this.props.routerProps}
         				/>
         			</Box>
        		</Grid>
      		</Grid>
      	</Box>
      </Box>
    );
  }
}

export default ViewPostings;