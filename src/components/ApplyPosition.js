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
  render() {
    return (
      <div>
        <h1>Required Documents</h1>
        <p>Required: Resume, Transcript</p>
        <DropzoneArea
          showFileNamesInPreview={true}
          showPreviewsInDropzone={false}
          showPreviews={true}
        //   acceptedFiles={[".pdf", ".doc", ".docx"]}
        //   dropzoneText={
        //     "Drag and drop a file here or click (.pdf, .doc, .docx)"
        //   }
        />
      </div>
    );
  }
}

class Questions extends React.Component {
  render() {
    return (
      <div>
        <Grid spacing={2} justify="flex-start">
          <Grid item>
            <Typography align="left" variant="h3">
              Question 1
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="left">
              What do you consider to be your weaknesses?
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-multiline-static"
              label="Answer"
              multiline
              rows={7}
              variant="outlined"
              style={{ width: "1000px" }}
            />
          </Grid>
        </Grid>

        <br />
        <br />
        <br />

        <Grid spacing={2} justify="flex-start">
          <Grid item>
            <Typography align="left" variant="h3">
              Question 2
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="left">
              What do you consider to be your strengths?
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-multiline-static"
              label="Answer"
              multiline
              rows={7}
              variant="outlined"
              style={{ width: "1000px" }}
            />
          </Grid>
        </Grid>
        <br />
        <Button disableElevation variant="contained" color="primary">
          Review Application &gt;{" "}
        </Button>
      </div>
    );
  }
}

class Review extends React.Component {
  render() {
    return (
      <div>
        <h1>Review Application</h1>
      </div>
    );
  }
}

class ApplyPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "ReqDoc", // Which page is active?
    };
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
          {this.state.active === "ReqDoc" && <ReqDoc />}
          {this.state.active === "Questions" && <Questions />}
          {this.state.active === "Review" && <Review />}
        </Grid>
      </div>
    );
  }
}

export default ApplyPosition;
