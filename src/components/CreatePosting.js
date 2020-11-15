import React from "react";
import Button from "@material-ui/core/Button";
import {
  Grid,
  ButtonGroup,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

import PostingCreation from "./PostingCreation.js";

class CreatePosting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseTitle: "",
      courseCode: "",
      courseDescription: "",
      courseSkills: "",
      courseResponsibilities: "",
      deadline: "",
      startTime: "",
      requiredDocuments: "",
      additionalApplicationQuestions: [],
      active: "ReqDoc",
      dialog: false,
    };

    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
  }

  handleCourseTitleChange(title) {
    this.setState({ courseTitle: title });
  }

  dialogToggle() {
    this.setState({ dialog: !this.state.dialog });
  }

  render() {
    return (
      <div className={"background"}>
        <div className={"foreground"}>
          <h1>{this.state.jobTitle} Application</h1>
          <Grid container spacing={2}>
            <Grid container item justify="center">
              <ButtonGroup disableElevation variant="contained" color="primary">
                <Button
                  onClick={(event) => this.setState({ active: "NamePosting" })}
                >
                  Name of Posting
                </Button>
                <Button
                  onClick={(event) => this.setState({ active: "PostDetails" })}
                >
                  Post Details
                </Button>
                <Button
                  onClick={(event) =>
                    this.setState({ active: "ApplicationDeadline" })
                  }
                >
                  Application Deadline
                </Button>
                <Button
                  onClick={(event) =>
                    this.setState({ active: "RequiredDocuments" })
                  }
                >
                  Required Documents
                </Button>
                <Button
                  onClick={(event) =>
                    this.setState({ active: "AdditionalQuestions" })
                  }
                >
                  Add Additional Questions
                </Button>
                <Button
                  onClick={(event) => this.setState({ active: "Review" })}
                >
                  Review
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid>
            {/* Name Posting Page */}
            {this.state.active === "NamePosting" && (
              <div>
                <NamePosting />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(event) => this.setState({ active: "PostDetails" })}
                >
                  Post Details &gt;
                </Button>
              </div>
            )}
            {/* Post Details Page */}
            {this.state.active === "PostDetails" && (
              <div>
                <PostDetails />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(event) =>
                    this.setState({ active: "ApplicationDeadline" })
                  }
                >
                  Application Deadline &gt;
                </Button>
              </div>
            )}
            {/* Application Deadline Page */}
            {this.state.active === "ApplicationDeadline" && (
              <div>
                <ApplicationDeadline />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(event) =>
                    this.setState({ active: "RequiredDocuments" })
                  }
                >
                  Required Documents &gt;
                </Button>
              </div>
            )}
            {/* Post Details Page */}
            {this.state.active === "RequiredDocuments" && (
              <div>
                <RequiredDocuments />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(event) =>
                    this.setState({ active: "AdditionalQuestions" })
                  }
                >
                  Additional Questions &gt;
                </Button>
              </div>
            )}
            {/* Post Details Page */}
            {this.state.active === "AdditionalQuestions" && (
              <div>
                <AdditionalQuestions />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(event) => this.setState({ active: "Review" })}
                >
                  Review &gt;
                </Button>
              </div>
            )}
            {/* Review Application Page */}
            {this.state.active === "Review" && (
              <div>
                <Review
                />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={this.dialogToggle.bind(this)}
                >
                  Submit
                </Button>

                {/* Success Message */}
                <Dialog
                  open={this.state.dialog}
                  onClose={this.dialogToggle.bind(this)}
                  aria-labelledby="alter-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Application Submitted"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Your application for the {this.state.jobTitle} position
                      has been successfully submitted. You may now leave this
                      page.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={this.dialogToggle.bind(this)}
                      color="primary"
                      autofocus
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

class NamePosting extends React.Component {
  constructor(props) {
    super(props);

    this.changeCourseTitle = this.changeCourseTitle.bind(this);
  }

  changeCourseTitle(e) {
    this.props.onCourseTitleChange(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>Please fill out the following text boxes</h3>
        <h5>Please click the 'Complete Step' button when you are done.</h5>
        <TextField
          id="coursetitle"
          label="Course Title"
          variant="outlined"
          margin="dense"
          onChange={this.changeCourseTitle}
        />
        <br />
        <TextField
          id="coursecode"
          label="Course Code"
          variant="outlined"
          margin="dense"
        />
      </div>
    );
  }
}

class PostDetails extends React.Component {
  render() {
    return (
      <div>
        <h3>Please add your posting details in the text box below.</h3>
        <p>Post Details</p>
      </div>
    );
  }
}

class ApplicationDeadline extends React.Component {
  render() {
    return (
      <div>
        <p>Application Deadline</p>
      </div>
    );
  }
}

class RequiredDocuments extends React.Component {
  render() {
    return (
      <div>
        <p>Required Documents</p>
      </div>
    );
  }
}

class AdditionalQuestions extends React.Component {
  render() {
    return (
      <div>
        <p>Additional Questions</p>
      </div>
    );
  }
}

class Review extends React.Component {
  render() {
    return (
      <div>
        <p>Review</p>
      </div>
    );
  }
}

export default CreatePosting;

/* TODO
Add post details
- Add course title
- Add course code
- Add description
- Add required skills
- Add job responsibilities 

Set deadline 
- Select month, day, year 
- Select hours, minutes 

Set start time 
- Select month, day, year 
- Select hours, minutes 

Set required documents 
Add additional application questions 
*/

/*
Creating Posting Component
Sub component under each one
State store in parent component


*/
