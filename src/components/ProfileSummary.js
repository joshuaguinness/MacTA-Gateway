import React from "react";
import profilepicture from "./static/images/parnasd.jpeg";
import "../style/Profile.css"
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

class ProfileSummary extends React.Component {

  render() {
    return (
      <div>
        <img
          src={profilepicture}
          width="225"
          alt="David Parnas"
          height="225"
        ></img>
        <h3>David Parnas</h3>
        <h5>{this.props.program}</h5>
        <p>parnasd@mcmaster.ca</p>
        <p>{this.props.phone}</p>
      </div>
    );
  }
}

export default ProfileSummary;
