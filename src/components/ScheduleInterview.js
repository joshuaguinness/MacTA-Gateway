import React from "react";
import Calendar from "react-material-ui-calendar";
import "../style/ScheduleInterview.css";

class ScheduleInterview extends React.Component {
  render() {
    return (
      <div className={"background"}>
        <div className={"foreground"}>
          <h1>Schedule Interview Page</h1>
          <div className={"body"}>
          <div className={"calendar"}>
            <Calendar
              light
              selection={(value) => console.log(value)}
              generalStyle={{ height: "100%" }}
            />
          </div>
          <div className={"scheduler"}>
            <h4>November 2020</h4>
            <h3>15</h3>
            <h4>Sunday</h4>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleInterview;
