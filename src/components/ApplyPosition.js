import React from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  Typography,
  TextField,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";

class ReqDoc extends React.Component {
  saveFiles(files) {
    this.props.parentSaveFiles(files);
  }

  render() {
    return (
      <div>
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
      <div>
        <h1>Additional Questions</h1>

        {this.props.appQuestions.map(({ id, q, a }) => (
          <div key={id}>
            <Grid spacing={2} justify="flex-start">
              <Grid item>
                <Typography align="left" variant="h3">
                  Question {id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left">{q}</Typography>
              </Grid>
              <br />
              <Grid item>
                <TextField
                  key={id}
                  id="outlined-multiline-static"
                  label="Answer"
                  multiline
                  rows={7}
                  variant="outlined"
                  style={{ width: "1000px" }}
                  defaultValue={a}
                  onChange={(event) => this.saveAnswer(id, event)}
                />
              </Grid>
            </Grid>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

class Review extends React.Component {
  render() {
    return (
      <div>
        <h1>Review Application</h1>
        <h2>Uploaded Documents</h2>
        {this.props.files.map((file) => (
          <p>{file.name}</p>
        ))}
        <h2>Additional Questions</h2>
        <h3>What do you consider to be your weaknesses?</h3>
        <p>This is a sample answer</p>
        <h3>What do you consider to be your strengths?</h3>
        <p>This is a sample answer</p>
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

  render() {
    return (
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button onClick={(event) => this.setState({ active: "ReqDoc" })}>
                Required Documents
              </Button>
              <Button
                onClick={(event) => this.setState({ active: "Questions" })}
              >
                Additional Questions
              </Button>
              <Button onClick={(event) => this.setState({ active: "Review" })}>
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
              <br />
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
              <br />
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
              <Review files={this.state.files} />
              <br />
              <Button disableElevation variant="contained" color="primary">
                Submit
              </Button>
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

export default ApplyPosition;
