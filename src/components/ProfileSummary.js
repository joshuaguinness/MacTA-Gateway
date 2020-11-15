import React from "react";
import profilepicture from "./static/images/parnasd.jpeg";
import "./Profile.css"
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

class ProfileSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          src={profilepicture}
          alt="Profile Picture"
          width="225"
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
