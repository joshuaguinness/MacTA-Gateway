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
      active: "NamePosting",
      dialog: false,
    };

    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
    this.handleCourseCodeChange = this.handleCourseCodeChange.bind(this);
    this.handleCourseDescriptionChange = this.handleCourseDescriptionChange.bind(
      this
    );
    this.handleCourseSkillsChange = this.handleCourseSkillsChange.bind(this);
    this.handleCourseResponsbilitiesChange = this.handleCourseResponsbilitiesChange.bind(this);
  }

  handleCourseTitleChange(title) {
    this.setState({ courseTitle: title });
  }

  handleCourseCodeChange(code) {
    this.setState({ courseCode: code });
  }

  handleCourseDescriptionChange(desc) {
    this.setState({ courseDescription: desc });
  }

  handleCourseSkillsChange(skills) {
    this.setState({ courseSkills: skills });
  }

  handleCourseResponsbilitiesChange(resp) {
    this.setState({ courseResponsibilities: resp });
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
                <NamePosting
                  courseTitle={this.state.courseTitle}
                  courseCode={this.state.courseCode}
                  updateCourseTitle={this.handleCourseTitleChange}
                  updateCourseCode={this.handleCourseCodeChange}
                />
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
                <PostDetails
                  courseDescription={this.state.courseDescription}
                  updateCourseDescription={this.handleCourseDescriptionChange}
                  courseSkills={this.state.courseSkills}
                  updateCourseSkills={this.handleCourseSkillsChange}
                  courseResponsibilities={this.state.courseResponsibilities}
                  updateCourseResponsibilities={this.handleCourseResponsbilitiesChange}
                />
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
                <Review />
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
    this.changeCourseCode = this.changeCourseCode.bind(this);
  }

  changeCourseTitle(e) {
    this.props.updateCourseTitle(e.target.value);
  }

  changeCourseCode(e) {
    this.props.updateCourseCode(e.target.value);
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
          defaultValue={this.props.courseTitle}
        />
        <br />
        <TextField
          id="coursecode"
          label="Course Code"
          variant="outlined"
          margin="dense"
          onChange={this.changeCourseCode}
          defaultValue={this.props.courseCode}
        />
      </div>
    );
  }
}

class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.changeCourseDescription = this.changeCourseDescription.bind(this);
    this.changeCourseSkills = this.changeCourseSkills.bind(this);
    this.changeCourseResponsibilities = this.changeCourseResponsibilities.bind(
      this
    );
  }

  changeCourseDescription(e) {
    this.props.updateCourseDescription(e.target.value);
  }

  changeCourseSkills(e) {
    this.props.updateCourseSkills(e.target.value);
  }

  changeCourseResponsibilities(e) {
    this.props.updateCourseResponsibilities(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>Please add your posting details in the text box below.</h3>
        <TextField
          id="postdescription"
          label="Description"
          multiline
          row={6}
          defaultValue={this.props.courseDescription}
          variant="outlined"
          onChange={this.changeCourseDescription}
        />
        <br />
        <TextField
          id="postskills"
          label="Skills"
          multiline
          row={6}
          defaultValue={this.props.courseSkills}
          variant="outlined"
          onChange={this.changeCourseSkills}
        />
        <br />
        <TextField
          id="postresponsibilities"
          label="Responsibilities"
          multiline
          row={6}
          defaultValue={this.props.courseResponsibilities}
          variant="outlined"
          onChange={this.changeCourseResponsibilities}
        />
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
