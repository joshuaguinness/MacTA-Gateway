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
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import "../style/CreatePosting.css";

class CreatePosting extends React.Component {
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
      active: "NamePosting",
      dialog: false,
    };

    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
    this.handleCourseCodeChange = this.handleCourseCodeChange.bind(this);
    this.handleCourseDescriptionChange = this.handleCourseDescriptionChange.bind(
      this
    );
    this.handleCourseSkillsChange = this.handleCourseSkillsChange.bind(this);
    this.handleCourseResponsbilitiesChange = this.handleCourseResponsbilitiesChange.bind(
      this
    );
    this.handleResumeChange = this.handleResumeChange.bind(this);
    this.handleCoverLetterChange = this.handleCoverLetterChange.bind(this);
    this.handleTranscriptChange = this.handleTranscriptChange.bind(this);
    this.handleDeadlineDateChange = this.handleDeadlineDateChange.bind(this);
    this.handleDeadlineTimeChange = this.handleDeadlineTimeChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleAdditionalApplicationQuestions = this.handleAdditionalApplicationQuestions.bind(
      this
    );
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

  handleResumeChange(res) {
    this.setState({ resume: res });
  }

  handleCoverLetterChange(cl) {
    this.setState({ coverLetter: cl });
  }

  handleTranscriptChange(trans) {
    this.setState({ transcript: trans });
  }

  handleDeadlineDateChange(date) {
    this.setState({ deadlineDate: date });
  }

  handleDeadlineTimeChange(time) {
    this.setState({ deadlineTime: time });
  }

  handleStartDateChange(date) {
    this.setState({ startDate: date });
  }

  handleEndDateChange(date) {
    this.setState({ endDate: date });
  }

  handleAdditionalApplicationQuestions(ques) {
    this.setState({ additionalApplicationQuestions: ques });
  }

  dialogToggle() {
    this.setState({ dialog: !this.state.dialog });
  }

  render() {
    return (
      <Box component="div" className="background">
        <Box component="div" className="foreground">
          <Grid container spacing={3} className="FixPadding">
            <Grid container item justify="center">
              <h1>{this.state.jobTitle} Application</h1>
            </Grid>
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
                <br></br>
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
                  updateCourseResponsibilities={
                    this.handleCourseResponsbilitiesChange
                  }
                  startDate={this.state.startDate}
                  updateStartDate={this.handleStartDateChange}
                  endDate={this.state.endDate}
                  updateEndDate={this.handleEndDateChange}
                />
                <br></br>
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
                <ApplicationDeadline
                  deadlineDate={this.state.deadlineDate}
                  deadlineTime={this.state.deadlineTime}
                  updateDeadlineDate={this.handleDeadlineDateChange}
                  updateDeadlineTime={this.handleDeadlineTimeChange}
                />
                <br></br>
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
            {/* Required Documents Page */}
            {this.state.active === "RequiredDocuments" && (
              <div>
                <RequiredDocuments
                  resume={this.state.resume}
                  coverLetter={this.state.coverLetter}
                  transcript={this.state.transcript}
                  lettersOfReference={this.state.lettersOfReference}
                  updateResume={this.handleResumeChange}
                  updateCoverLetter={this.handleCoverLetterChange}
                  updateTranscript={this.handleTranscriptChange}
                  updateLettersOfReference={this.handleLettersOfReferenceChange}
                />
                <br></br>
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
            {/* Additional Questions Page */}
            {this.state.active === "AdditionalQuestions" && (
              <div>
                <AdditionalQuestions
                  additionalApplicationQuestions={
                    this.state.additionalApplicationQuestions
                  }
                  updateAdditionalApplicationQuestions={
                    this.handleAdditionalApplicationQuestions
                  }
                />
                <br></br>
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
                <Review {...this.state} />
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
                      autoFocus
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </Grid>
        </Box>
      </Box>
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
        <p>Please click the 'Post Details' button when you are done.</p>
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
    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
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

  changeStartDate(e) {
    this.props.updateStartDate(e.target.value);
  }

  changeEndDate(e) {
    this.props.updateEndDate(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>Please add your posting details in the text box below.</h3>
        <TextField
          className="textfield"
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
        className="textfield"
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
        className="textfield"
          id="postresponsibilities"
          label="Responsibilities"
          multiline
          row={6}
          defaultValue={this.props.courseResponsibilities}
          variant="outlined"
          onChange={this.changeCourseResponsibilities}
        />
        <br />
        <TextField
        className="textfield"
          id="startdate"
          label="Position Start Date"
          type="date"
          defaultValue={this.props.startDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.changeStartDate}
        />
        <br />
        <TextField
        className="textfield"
          id="enddate"
          label="Position End Date"
          type="date"
          defaultValue={this.props.endDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.changeEndDate}
        />
      </div>
    );
  }
}

class ApplicationDeadline extends React.Component {
  constructor(props) {
    super(props);

    this.changeDeadlineDate = this.changeDeadlineDate.bind(this);
    this.changeDeadlineTime = this.changeDeadlineTime.bind(this);
    this.changeDateTime = this.changeDateTime.bind(this);
  }

  changeDeadlineDate(date) {
    this.props.updateDeadlineDate(date);
  }

  changeDeadlineTime(time) {
    this.props.updateDeadlineTime(time);
  }

  changeDateTime(e) {
    const dateTime = e.target.value;
    const date = dateTime.slice(0, 10);
    const time = dateTime.slice(11, 16);
    this.changeDeadlineDate(date);
    this.changeDeadlineTime(time);
  }

  render() {
    return (
      <div>
        <h3>Application Deadline</h3>
        <p>Please add an application deadline</p>
        <TextField
          id="applicationdeadline"
          label="Application Deadline"
          type="datetime-local"
          defaultValue={this.props.deadlineDate + "T" + this.props.deadlineTime}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.changeDateTime}
        />
        <br />
      </div>
    );
  }
}

class RequiredDocuments extends React.Component {
  constructor(props) {
    super(props);

    this.changeResume = this.changeResume.bind(this);
    this.changeCoverLetter = this.changeCoverLetter.bind(this);
    this.changeTranscript = this.changeTranscript.bind(this);
  }

  changeResume(e) {
    this.props.updateResume(e.target.checked);
  }

  changeCoverLetter(e) {
    this.props.updateCoverLetter(e.target.checked);
  }

  changeTranscript(e) {
    this.props.updateTranscript(e.target.checked);
  }

  render() {
    return (
      <div>
        <h3>Required Documents</h3>
        <p>
          Select which documents you would like to be required for applications
          to submit
        </p>
        <Grid container item justify="center">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.resume}
                onChange={this.changeResume}
                name="resume"
                color="primary"
              />
            }
            label="Resume"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.coverLetter}
                onChange={this.changeCoverLetter}
                name="coverletter"
                color="primary"
              />
            }
            label="Cover Letter"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.transcript}
                onChange={this.changeTranscript}
                name="transcript"
                color="primary"
              />
            }
            label="Transcript"
          />
        </FormGroup>
        </Grid>
      </div>
    );
  }
}

class AdditionalQuestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuestion: "",
      key: this.props.additionalApplicationQuestions.length,
    };

    this.changeAdditionalAppliactionQuestions = this.changeAdditionalAppliactionQuestions.bind(
      this
    );
    this.updateQuestionState = this.updateQuestionState.bind(this);
  }

  changeAdditionalAppliactionQuestions(e) {
    const newQArray = [
      ...this.props.additionalApplicationQuestions,
      { id: this.state.key, question: this.state.newQuestion },
    ];
    const newKey = this.state.key + 1;
    this.setState({ key: newKey });
    this.props.updateAdditionalApplicationQuestions(newQArray);
  }

  updateQuestionState(e) {
    this.setState({ newQuestion: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Additional Questions</h3>
        <p>
          Please add any additional questions that you would like applicants to
          answer as a part of the application process.
        </p>
        <p>Type them into the box, and click "Add" to add them.</p>
        <h4>Questions added so far:</h4>
        {this.props.additionalApplicationQuestions.map(({ id, question }) => (
          <p key={id}>{question}</p>
        ))}
        <TextField
        className="textfield"
          id="additionalquestion"
          label="Question"
          multiline
          row={6}
          defaultValue=""
          variant="outlined"
          onChange={this.updateQuestionState}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.changeAdditionalAppliactionQuestions}
        >
          Add
        </Button>
        <br />
      </div>
    );
  }
}

class Review extends React.Component {
  render() {
    return (
      <div>
        <h3>Please review before submitting</h3>
        <h4>Name of Posting</h4>
        <p>Course Title: {this.props.courseTitle}</p>
        <p>Course Code: {this.props.courseCode}</p>
        <h4>Post Details</h4>
        <p>Description: {this.props.courseDescription}</p>
        <p>Skills: {this.props.courseSkills}</p>
        <p>Responsibilities: {this.props.courseResponsibilities}</p>
        <p>Position Start Date: {this.props.startDate}</p>
        <p>Position End Date: {this.props.endDate}</p>
        <h4>Application Deadline</h4>
        <p>Deadline Date: {this.props.deadlineDate}</p>
        <p>Deadline Time: {this.props.deadlineTime}</p>
        <h4>Required Documents</h4>
        {this.props.resume ? <p>Resume</p> : null}
        {this.props.coverLetter ? <p>Cover Letter</p> : null}
        {this.props.transcript ? <p>Transcript</p> : null}
        <h4>Additional Questions</h4>
        {this.props.additionalApplicationQuestions.map(({ id, question }) => (
          <p key={id}>{question}</p>
        ))}
      </div>
    );
  }
}

export default CreatePosting;
