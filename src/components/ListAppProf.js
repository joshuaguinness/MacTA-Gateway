import React from "react";
import "../style/ListAppProf.css";
import { Box, Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class ListAppProf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseTitle: "",
      courseCode: "",
      courseDescription: "",
      courseSkills: "",
      courseResponsibilities: "",
      deadlineDate: "2020-11-15",
      deadlineTime: "23:59",
      startDate: "2020-11-15",
      endDate: "2020-11-15",
      resume: false,
      coverLetter: false,
      transcript: false,
      additionalApplicationQuestions: [],
    };
  }
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
            <Grid item xs={12} className="modify-button-group">
              <Button className="editButton optionButton" color="primary" variant="outlined">Edit Post Details</Button>
              <Button className="deleteButton optionButton" variant="outlined">Delete Posting</Button>
			  <Button className="filledButton optionButton" variant="outlined">Mark As Filled</Button>
              <Button className="closeButton optionButton" variant="outlined">Close Posting</Button>
			  <Button className="reopenButton optionButton" variant="outlined">Reopen Posting</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default ListAppProf;
