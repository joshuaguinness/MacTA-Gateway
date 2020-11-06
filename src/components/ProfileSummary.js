import React from "react";
import profilepicture from "./static/images/parnasd.jpeg"
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

class ProfileSummary extends React.Component {
  render() {
    return (
      <div>
          <img src={profilepicture} alt="Girl in a jacket" width="225" height="225"></img>
          <h3>David Parnas</h3>
          <h5>Software Engineering</h5>
          <p>parnasd@mcmaster.ca</p>
          <p>519-000-1998</p>
        </div>
    );
  }
}

export default ProfileSummary;
