import React from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  Typography,
  TextField,
} from "@material-ui/core";

class ReqDoc extends React.Component {
  render() {
    return (
      <div>
        <h1>Required Documents</h1>
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
      active: "Questions", // Which page is active?
    };
  }

  render() {
    return (
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button>Required Documents</Button>
              <Button>Additional Questions</Button>
              <Button>Review Application</Button>
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
