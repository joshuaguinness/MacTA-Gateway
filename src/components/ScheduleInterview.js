import React from "react";
import Calendar from "react-material-ui-calendar";
import "../style/ScheduleInterview.css";

class ScheduleInterview extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
      dateTime: new Date(),
    };
  }

  setDate(date) {
    this.setState({ dateTime: date });
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
              <p>
                {this.getMonthName(this.state.dateTime.getMonth())}{" "}
                {this.state.dateTime.getFullYear()}
              </p>
              <p>{this.state.dateTime.getDate()}</p>
              <p>{this.getWeekdayName(this.state.dateTime.getDay())}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleInterview;
