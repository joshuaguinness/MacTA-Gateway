import React from "react";
import Calendar from "react-material-ui-calendar";
import {
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import "../style/ScheduleInterview.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interview: {
        job: "",
        candidate: "",
        location: "",
        start: new Date(),
        end: new Date(),
      },
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

  render() {
    return (
      <div>
        {/* Date Section */}
        <div>
          <p>
            {this.getMonthName(this.props.dateTime.getMonth())}{" "}
            {this.props.dateTime.getFullYear()}
          </p>
          <p>{this.props.dateTime.getDate()}</p>
          <p>{this.getWeekdayName(this.props.dateTime.getDay())}</p>
        </div>

        {/* Time Section */}
        <div>
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
                  1 +
                  ":" +
                  this.state.interview.end.getMinutes()
                }
                onChange={(e) => this.setTime("end", e.target.value)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Job Title Section */}
        <br />
        <div>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Job Title
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Job Title"
              onChange={(e) => this.setJob(e.target.value)}
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
        <br />
        <div>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Candidate
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Candidate"
              onChange={(e) => this.setCandidate(e.target.value)}
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
        <div>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            onChange={(e) => this.setLocation(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

class ScheduleInterview extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
      dateTime: new Date(),
      interviews: [
        {
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

  render() {
    return (
      <div className={"background"}>
        <div className={"foreground"}>
          <h1>Schedule Interview</h1>
          <div className={"body"}>
            <div className={"calendar"}>
              <Calendar
                light
                // selection={this.formatDate}
                selection={this.setDate}
                generalStyle={{ height: "100%" }}
              />
            </div>
            <div className={"scheduler"}>
              <SideBar
                dateTime={this.state.dateTime}
                interviews={this.state.interviews}
                jobs={this.state.jobs}
                candidates={this.state.candidates}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleInterview;
