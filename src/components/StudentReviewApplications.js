import React from "react";
import './ReviewApplications.css';
import {Box, Button, Grid, Tabs, Tab, Typography, AppBar, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
      			 <div className="test5">
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
					({id, name, qr1, qr2, message, action}) =>
						<TabPanel value={this.state.value} index={id}>
			        		<AppBody title={name} resp1={qr1} resp2={qr2} message={message} action={action}/>
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
		this.state = {value : 0, index:0, open: false, open2: false}
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

  	setOpen(b){
  		this.setState({open: b})
  	}

  	setOpen2(b){
  		this.setState({open2: b})
  	}

	render() {
		const f1 = Resume;
		const f2 = Transcript;

	  	const handleClickOpen = () => {
	    	this.setOpen(true);
	  	};

  		const handleClose = () => {
    		this.setOpen(false);
  		};

  		const handleClickOpen2 = () => {
	    	this.setOpen2(true);
	  	};

  		const handleClose2 = () => {
    		this.setOpen2(false);
  		};

		return(
			<div>
			<h2 className="RemovePadding"> {this.props.title} - Application </h2>
			<div className = "Outer3">
			<Grid container spacing={0}>
				<Grid item xs={8} >
				<AppBar className="appBar2" position="static" color="default">
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
			    <div className="overview2">
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
			    </Grid>
			    <Grid item xs={4} >
			    <div className="rightBeside2">

			    	<h3> {this.props.message} </h3>

					<Grid className="buttonGrids" container spacing={4} >
						<Grid item xs={6} >
							<Button className=" adSize markForInterview" variant="contained" onClick={handleClickOpen}> Accept {this.props.action} </Button>
						</Grid>
						<Grid item xs={6} >
							<Button className=" adSize reject" variant="contained" onClick={handleClickOpen2}> Reject {this.props.action} </Button>
						</Grid>
					</Grid>
				</div>
				</Grid>
				</Grid>	
			</div>

			<Dialog
		        open={this.state.open}
		        onClose={handleClose}
		        aria-labelledby="alert-dialog-title"
		        aria-describedby="alert-dialog-description"
		    >
		        <DialogTitle id="alert-dialog-title">{this.props.action + " Accepted"}</DialogTitle>
		        <DialogContent>
		          <DialogContentText id="alert-dialog-description">
		            {this.props.action} has been accepted. This window is safe to close.
		          </DialogContentText>
		        </DialogContent>
		        <DialogActions>
		          <Button onClick={handleClose} color="primary" autoFocus>
		            Close
		          </Button>
		        </DialogActions>
      		</Dialog>

      		<Dialog
		        open={this.state.open2}
		        onClose={handleClose2}
		        aria-labelledby="alert-dialog-title"
		        aria-describedby="alert-dialog-description"
		    >
		        <DialogTitle id="alert-dialog-title">{this.props.action + " Rejected"}</DialogTitle>
		        <DialogContent>
		          <DialogContentText id="alert-dialog-description">
		            {this.props.action} has been Rejected. This window is safe to close.
		          </DialogContentText>
		        </DialogContent>
		        <DialogActions>
		          <Button onClick={handleClose2} color="primary" autoFocus>
		            Close
		          </Button>
		        </DialogActions>
      		</Dialog>


			</div>
		);
	}
}

class StudentReviewApplications extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			Package : [{
				id:0,
				name:'SFWRENG 2DM3 – Discrete Math I',
				qr1:"I'm a Perfectionist",
				qr2:'Time Management',
				message: "Congratulations! you have been offered the position",
				action: "Job Offer"
			},
			{
				id:1,
				name:'SFWRENG 2SO3 – Principles of Programming',
				qr1:'I focus on details too much',
				qr2:'Quick thinking',
				message: "Your Interview time is Tue Nov 24 2020 from 16:30 - 17:30 in ITB 163.",
				action: "Interview Time"
			},
		]};
	}

  render() {
  	console.log("hello")
    return (
      <Box component="div" className="background">
      	<Box component="div" className="foreground">
          	<BodyTabs people={this.state.Package}/>
      	</Box>
      </Box>
    );
  }
}

export default StudentReviewApplications;