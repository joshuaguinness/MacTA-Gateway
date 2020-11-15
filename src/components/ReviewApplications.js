import React from "react";
import './ReviewApplications.css';
import {Box, Button, Grid, Tabs, Tab, Typography, AppBar, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import Resume from './static/pdf/comp_sci_-_two_page_sample.pdf'
import Transcript from './static/pdf/transcript.pdf'

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

class BodyTabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value : 0}
		this.handleChange = this.handleChange.bind(this)
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


  	render() {
  		return(
      		<div className = "alignMe">
      			 <div className="test">
          			<Tabs
          				orientation="vertical"
          				variant="scrollable"
          				value={this.state.value}
   						onChange={this.handleChange}
          				className={this.useStyles.tabs}
      				>
      					{this.props.people.map(
      						({id, name, qr1, qr2}) =>
      							<Tab label={name} className="test2" data-index={id} {...a11yProps({id})} />
      						)}
      				</Tabs>
      				</div>

      			<div className="alignRight">

				{this.props.people.map(
					({id, name, qr1, qr2}) =>
						<TabPanel value={this.state.value} index={id}>
			        		<AppBody resp1={qr1} resp2={qr2}/>
			      		</TabPanel>
				)}
				</div>
  			</div>
  		);
  	}
}

class RenderPdf extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
    		numPages: null,
  		}
	}


  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { numPages } = this.state;
    return (
          <div className="docs">
            <Document
              file={this.props.file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={{
    				cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
    				cMapPacked: true,
  				}}
            >
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                )
              }
            </Document>
          </div>
    );
  }
}

class AppBody extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {value : 0, index:0}
		this.handleChange = this.handleChange.bind(this)
	}

	useStyles = makeStyles((theme) => ({
	  root: {
    		backgroundColor: theme.palette.background.paper,
    		width: 500,
  		},
	}));

  	handleChange(e) {
  		var parsed = parseInt(e.currentTarget.dataset.index, 10)
  		console.log(parsed)
  		this.setState({value: parsed})
  	}

	render() {
		const f1 = Resume;
		const f2 = Transcript;
		return(
			<div className = "Outer2">
				<AppBar position="static" color="default">
			        <Tabs
			          value={this.state.value}
			          onChange={this.handleChange}
			          indicatorColor="primary"
			          textColor="primary"
			          variant="fullWidth"
			          aria-label="full width tabs example"
			        >
			          <Tab label="Resume" data-index={0} {...a11yProps(0)} />
			          <Tab label="Questions" data-index={1} {...a11yProps(1)} />
			          <Tab label="Transcript" data-index={2} {...a11yProps(2)} />
			        </Tabs>
			    </AppBar>
			    <div className="overview">
			        <TabPanel value={this.state.value} index={0}>
			          <RenderPdf file={f1}/>
			        </TabPanel>
			        <TabPanel value={this.state.value} index={1}>
			        	<Paper className="resps">
			        		<p> <b> What is your greatest weakness? </b> </p>
			          		{this.props.resp1}
							<br />
							<br />
			          		<p> <b> What is your greatest strength? </b> </p>
			          		{this.props.resp2}
			          	</Paper>
			        </TabPanel>
			        <TabPanel value={this.state.value} index={2}>
			        	<RenderPdf file={f2}/>
			        </TabPanel>
			        </div>
			</div>
		);
	}
}

class ReviewApplications extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			people : [{
				id:0,
				name:'Lilibeth Andrada',
				qr1:"I'm a Perfectionist",
				qr2:'Time Management'
			},
			{
				id:1,
				name:'Michael Armstrong',
				qr1:'I focus on details too much',
				qr2:'Quick thinking'
			},
			{
				id:2,
				name:'Cathal Diaz',
				qr1:'I get distracted easily',
				qr2:'My Work Ethic'
			},
			{
				id:3,
				name:'Gethin Good',
				qr1:'Spelling',
				qr2:'Adaptability is my greatest strength'
			},
			{
				id:4,
				name:'Bevin Krowne',
				qr1:'I work too hard',
				qr2:'Public Speaking'
			},
			{
				id:5,
				name:'Paula Schreier',
				qr1:"I'm a perfectionist",
				qr2:'My attention to detail'
			},
			{
				id:6,
				name:'Nana Teagan',
				qr1:'Math is my greatest weakness',
				qr2:'My desire to learn and teach'
			}],
		};
	}

  render() {
  	console.log("hello")
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
          	<Grid className="FixPadding" container spacing={0}>
      			<Grid item xs={1}>
      				<NavLink className="linkText2" exact to="/reviewapplications">
      					<Button className="linkButton2" variant="contained">
            				Back to List
            			</Button>
          			</NavLink>
          		</Grid>
          		<Grid item xs={11}>
          		    <p className="title2"> <b> ENGINEER 1P13 Applications </b> </p>
          		</Grid>
          	</Grid>
          	<BodyTabs people={this.state.people}/>
      	</Box>
      </Box>
    );
  }
}

export default ReviewApplications;