import React from "react";
import Calendar from "react-material-ui-calendar";
import "../style/ScheduleInterview.css";

class SideBar extends React.Component {
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

  render() {
    return (
      <div>
        <p>
          {this.getMonthName(this.props.dateTime.getMonth())}{" "}
          {this.props.dateTime.getFullYear()}
        </p>
        <p>{this.props.dateTime.getDate()}</p>
        <p>{this.getWeekdayName(this.props.dateTime.getDay())}</p>
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
          job: "ENGINEER 1P13 Undergra TA",
          candidate: "Joshua Guinness",
          location: "ITB 163",
          start: new Date("November 24, 2020 16:30:00"),
          end: new Date("November 24, 2020 17:30:00"),
        },
      ],
      jobs: [],
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
