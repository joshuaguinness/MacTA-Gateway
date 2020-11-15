import React from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import "../style/ApplyPosition.css";

class ReqDoc extends React.Component {
  saveFiles(files) {
    this.props.parentSaveFiles(files);
  }

  render() {
    return (
      <div className={"ReqDoc"}>
        <h1>Required Documents</h1>
        <p>Required: Resume, Transcript</p>
        <DropzoneArea
          initialFiles={this.props.appFiles}
          showFileNamesInPreview={true}
          showPreviewsInDropzone={false}
          showPreviews={true}
          onChange={(files) => this.saveFiles(files)}
        />
      </div>
    );
  }
}

class Questions extends React.Component {
  saveAnswer(id, e) {
    this.props.parentSaveAnswer(id, e.target.value);
  }

  render() {
    return (
      <div className={"Questions"}>
        <h1>Additional Questions</h1>

        {this.props.appQuestions.map(({ id, q, a }) => (
          <div key={id} className={"questionsBody"}>
            <Grid spacing={2}>
              <Grid item>
                <h3>Question {id}</h3>
              </Grid>
              <Grid item>
                <p>{q}</p>
              </Grid>
              <br />
              <Grid item>
                <TextField
                  key={id}
                  id="outlined-multiline-static"
                  className={"inputField"}
                  label="Answer"
                  multiline
                  rows={7}
                  variant="outlined"
                  defaultValue={a}
                  onChange={(event) => this.saveAnswer(id, event)}
                />
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    );
  }
}

class Review extends React.Component {
  render() {
    return (
      <div className={"Review"}>
        <h1>Review Application</h1>
        <h2 className={"reviewBody"}>Uploaded Documents</h2>
        {this.props.appFiles.map((file) => (
          <p key={file.name} className={"reviewBody"}>
            {file.name}
          </p>
        ))}
        <h2 className={"reviewBody"}>Additional Questions</h2>
        {this.props.appQuestions.map(({ id, q, a }) => (
          <div key={id}>
            <h3 className={"reviewBody"}>
              Question {id}: {q}
            </h3>
            <p className={"reviewBody"}>{a}</p>
          </div>
        ))}
      </div>
    );
  }
}

class ApplyPosition extends React.Component {
  constructor(props) {
    super(props);
    this.saveAnswers = this.saveAnswers.bind(this);
    this.saveFiles = this.saveFiles.bind(this);
    this.state = {
      active: "ReqDoc", // Which page is active?
      files: [],
      questions: [
        { id: 1, q: "What do you consider to be your weaknesses?", a: "" },
        { id: 2, q: "What do you consider to be your strengths?", a: "" },
      ],
      dialog: false,
      jobTitle: "SFWRENG 2FA3 Undergrad TA",
    };
  }

  saveAnswers(index, answer) {
    let newQuestions = this.state.questions;
    newQuestions[index - 1].a = answer;
    this.setState({ questions: newQuestions });
  }

  saveFiles(fileList) {
    this.setState({ files: fileList });
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
                  onClick={(event) => this.setState({ active: "ReqDoc" })}
                >
                  Required Documents
                </Button>
                <Button
                  onClick={(event) => this.setState({ active: "Questions" })}
                >
                  Additional Questions
                </Button>
                <Button
                  onClick={(event) => this.setState({ active: "Review" })}
                >
                  Review Application
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid>
            {/* Required Documents Page */}
            {this.state.active === "ReqDoc" && (
              <div>
                <ReqDoc
                  appFiles={this.state.files}
                  parentSaveFiles={this.saveFiles}
                />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(event) => this.setState({ active: "Questions" })}
                >
                  Additional Questions &gt;
                </Button>
              </div>
            )}

            {/* Additional Questions Page */}
            {this.state.active === "Questions" && (
              <div>
                <Questions
                  appQuestions={this.state.questions}
                  parentSaveAnswer={this.saveAnswers}
                />
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(event) => this.setState({ active: "Review" })}
                >
                  Review Application &gt;
                </Button>
              </div>
            )}

            {/* Review Application Page */}
            {this.state.active === "Review" && (
              <div>
                <Review
                  appFiles={this.state.files}
                  appQuestions={this.state.questions}
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

export default ApplyPosition;
