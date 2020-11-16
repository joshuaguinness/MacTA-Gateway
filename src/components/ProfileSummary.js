import React from "react";
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
          src={this.props.profilePic}
          width="325"
          alt="Profile"
          height="325"
        ></img>
        <h3>David Parnas</h3>
        <h4>{this.props.program}</h4>
        <p>parnasd@mcmaster.ca</p>
        <p>{this.props.phone}</p>
      </div>
    );
  }
}

export default ProfileSummary;
