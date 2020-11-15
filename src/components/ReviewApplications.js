import React from "react";
import './ReviewApplications.css';
import {Box, Button, Grid, Tabs, Tab, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import myPdf from './static/pdf/comp_sci_-_two_page_sample.pdf'

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
      					<Tab label="one" className="test2" data-index={0} {...a11yProps(0)} />
      					<Tab label="2" className="test2" data-index={1} {...a11yProps(1)} />
      					<Tab label="3" className="test2" data-index={2} {...a11yProps(2)} />
      					<Tab label="4" className="test2" data-index={3} {...a11yProps(3)} />
      					<Tab label="5" className="test2" data-index={4} {...a11yProps(4)} />
      					<Tab label="6" className="test2" data-index={5} {...a11yProps(5)} />
      					<Tab label="7" className="test2" data-index={6} {...a11yProps(6)} />
      				</Tabs>
      				</div>

      			<div className="alignRight">
  			      <TabPanel value={this.state.value} index={0}>
			        <AppBody />
			      </TabPanel>
			      <TabPanel value={this.state.value} index={1}>
			        Item Two
			      </TabPanel>
			      <TabPanel value={this.state.value} index={2}>
			        Item Three
			      </TabPanel>
			      <TabPanel value={this.state.value} index={3}>
			        Item Four
			      </TabPanel>
			      <TabPanel value={this.state.value} index={4}>
			        Item Five
			      </TabPanel>
			      <TabPanel value={this.state.value} index={5}>
			        Item Six
			      </TabPanel>
			      <TabPanel value={this.state.value} index={6}>
			        Item Seven
			      </TabPanel>
				</div>
  			</div>
  		);
  	}
}

class Sample extends React.Component {
  state = {
    numPages: null,
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
	}

	render() {
		const f1 = myPdf;
		return(
			<div className="overview">
				<Sample file={f1}/>
			</div>
		);
	}
}

class ReviewApplications extends React.Component {
  constructor(props) {
		super(props);
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
          		    <p> Name </p>
          		</Grid>
          	</Grid>
          	<BodyTabs />
      	</Box>
      </Box>
    );
  }
}

export default ReviewApplications;