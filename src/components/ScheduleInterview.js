import React from "react";
import Calendar from "react-material-ui-calendar";
import {
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
} from "@material-ui/core";
import "../style/ScheduleInterview.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interview: {
        id: 0,
        job: "",
        candidate: "",
        location: "",
        start: new Date(),
        end: new Date(),
      },
      dialog: false,
      showUpcoming: false,
    };
  }

  getMonthName(month) {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  }

  getWeekdayName(day) {
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[day];
  }

  setTime(id, time) {
    let newTime = this.state.interview;
    if (id === "start") {
      newTime.start.setHours(parseInt(time.slice(0, 2)));
      newTime.start.setMinutes(parseInt(time.slice(3, 5)));
      newTime.start.setSeconds(0);
      newTime.start.setMilliseconds(0);
      this.setState({ interview: newTime });
    } else if (id === "end") {
      newTime.end.setHours(parseInt(time.slice(0, 2)));
      newTime.end.setMinutes(parseInt(time.slice(3, 5)));
      newTime.end.setSeconds(0);
      newTime.end.setMilliseconds(0);
      this.setState({ interview: newTime });
    }

    console.log(this.state.interview);
  }

  setJob(job) {
    let newJob = this.state.interview;
    newJob.job = job;
    this.setState({ interview: newJob });
  }

  setCandidate(candidate) {
    let newCandidate = this.state.interview;
    newCandidate.candidate = candidate;
    this.setState({ interview: newCandidate });
  }

  setLocation(location) {
    let newLocation = this.state.interview;
    newLocation.location = location;
    this.setState({ interview: newLocation });
  }

  saveInterview() {
    let interview = { ...this.state.interview };
    interview.id = this.props.getNextId();
    this.props.addInterview(interview);
    this.dialogToggle();
  }

  dialogToggle() {
    this.setState({ dialog: !this.state.dialog });
  }

  upcomingToggle() {
    this.setState({ showUpcoming: !this.state.showUpcoming });
  }

  deleteInterview(id) {
    this.props.deleteInterview(id);
  }

  render() {
    return (
      <div>
        {/* Date Section */}
        <div>
          <p className={"datesub"}>
            {this.getMonthName(this.props.dateTime.getMonth())}{" "}
            {this.props.dateTime.getFullYear()}
          </p>
          <p className={"datemain"}>{this.props.dateTime.getDate()}</p>
          <p className={"datesub"}>
            {this.getWeekdayName(this.props.dateTime.getDay())}
          </p>
        </div>

        {/* Time Section */}
        <div className={"section"}>
          <Grid container spacing={5} justify="center">
            <Grid item>
              <TextField
                id="time"
                label="Start"
                type="time"
                defaultValue={
                  this.state.interview.start.getHours() +
                  ":" +
                  this.state.interview.start.getMinutes()
                }
              />
            </Grid>
            <Grid item>
              <TextField
                id="time"
                label="End"
                type="time"
                defaultValue={
                  this.state.interview.end.getHours() +
                  ":" +
                  this.state.interview.end.getMinutes()
                }
                onChange={(e) => this.setTime("end", e.target.value)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Job Title Section */}
        <div className={"section"}>
          <FormControl variant="outlined" style={{ width: 255 }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Job Title
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Job Title"
              onChange={(e) => this.setJob(e.target.value)}
              inputProps={{
                id: "job",
              }}
            >
              {this.props.jobs.map((job) => (
                <MenuItem value={job} key={job}>
                  {job}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Candidate Section */}
        <div className={"section"}>
          <FormControl variant="outlined" style={{ width: 255 }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Candidate
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Candidate"
              onChange={(e) => this.setCandidate(e.target.value)}
              inputProps={{
                id: "candidate",
              }}
            >
              {this.props.candidates.map((candidate) => (
                <MenuItem value={candidate} key={candidate}>
                  {candidate}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Location Section */}
        <div className={"section"}>
          <TextField
            id="outlined-basic"
            style={{ width: 255 }}
            label="Location"
            variant="outlined"
            onChange={(e) => this.setLocation(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className={"section"}>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={() => this.saveInterview()}
          >
            Schedule
          </Button>

          {/* Success Message */}
          <Dialog
            open={this.state.dialog}
            onClose={this.dialogToggle.bind(this)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Interview Scheduled"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your interview has been successfully scheduled. You may now
                leave this page.
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

        {/* View Scheduled Interviews */}
        <div className={"section"}>
          <Button
            disableElevation
            variant="contained"
            onClick={this.upcomingToggle.bind(this)}
          >
            View Upcoming Interviews
          </Button>

          {/* Scheduled Interviews List */}
          <Dialog
            open={this.state.showUpcoming}
            onClose={this.upcomingToggle.bind(this)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Upcoming Interviews"}
            </DialogTitle>
            <DialogContent>
              {this.props.interviews.map((interview) => (
                <DialogContentText
                  id="alert-dialog-description"
                  className={"body"}
                  key={interview.id}
                >
                  <Grid container spacing={2} justify="space-between">
                    <Grid item>
                      Candidate: {interview.candidate}
                      <br />
                      Position: {interview.job}
                      <br />
                      Date: {interview.start.toDateString()}
                      <br />
                      Time:{" "}
                      {interview.start.getHours() +
                        ":" +
                        (interview.start.getMinutes() < 10 ? "0" : "") +
                        interview.start.getMinutes()}{" "}
                      -{" "}
                      {interview.end.getHours() +
                        ":" +
                        (interview.end.getMinutes() < 10 ? "0" : "") +
                        interview.end.getMinutes()}
                      <br />
                      Location: {interview.location}
                      <br />
                    </Grid>
                    <Grid item>
                      <Button
                        disableElevation
                        variant="secondary"
                        onClick={() => this.deleteInterview(interview.id)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </DialogContentText>
              ))}
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.upcomingToggle.bind(this)}
                color="primary"
                autoFocus
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

class ScheduleInterview extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.addInterview = this.addInterview.bind(this);
    this.getNextId = this.getNextId.bind(this);
    this.deleteInterview = this.deleteInterview.bind(this);
    this.state = {
      dateTime: new Date(),
      idCounter: 1,
      interviews: [
        {
          id: 1,
          job: "ENGINEER 1P13 Undergrad TA",
          candidate: "Joshua Guinness",
          location: "ITB 163",
          start: new Date("November 24, 2020 16:30:00"),
          end: new Date("November 24, 2020 17:30:00"),
        },
      ],
      jobs: ["ENGINEER 1P13 Undergrad TA", "SFWRENG 4HC3 Undergrad TA"],
      candidates: [
        "Joshua Guinness",
        "Arkin Modi",
        "Nicholas Mari",
        "Bevin Krowne",
      ],
    };
  }

  setDate(date) {
    this.setState({ dateTime: date });
  }

  addInterview(interview) {
    let newInterviews = this.state.interviews;
    this.setState({ interviews: [...newInterviews, interview] });
  }

  deleteInterview(id) {
    let newInterviews = this.state.interviews.filter(
      (interview) => interview.id !== id
    );
    this.setState({ interviews: newInterviews });
  }

  getNextId() {
    let nextId = this.state.idCounter + 1;
    this.setState({ idCounter: nextId });
    return nextId;
  }

  render() {
    return (
      <Box component="div" className="background">
        <Box component="div" className="foreground">
          <Grid className="FixPadding gridInterview" container spacing={3}>
            <Grid container item justify="center">
              <h1>Schedule Interview</h1>
            </Grid>
              <Grid item xs={9}>
                  <Calendar
                    light
                    selection={this.setDate}
                    generalStyle={{ height: "100%" }}
                  />
              </Grid>
              <Grid item xs={3}>
                  <SideBar
                    dateTime={this.state.dateTime}
                    interviews={this.state.interviews}
                    jobs={this.state.jobs}
                    candidates={this.state.candidates}
                    addInterview={this.addInterview}
                    getNextId={this.getNextId}
                    deleteInterview={this.deleteInterview}
                  />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default ScheduleInterview;
