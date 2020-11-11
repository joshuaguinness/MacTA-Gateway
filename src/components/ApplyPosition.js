import React from "react";
import { Grid, Button, ButtonGroup } from "@material-ui/core";

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
        <h1>Addtional Questions</h1>
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
      temp: true,
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
      </div>
    );
  }
}

export default ApplyPosition;
