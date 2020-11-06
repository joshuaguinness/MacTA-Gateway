import React from "react";
import Avatar from "@material-ui/core/Avatar";
import profilepicture from "./static/images/parnasd.jpeg"

class ProfileSummary extends React.Component {
  render() {
    return (
      <div>
        <br />
          <img src={profilepicture} alt="Girl in a jacket" width="225" height="225"></img>
        </div>
    );
  }
}

export default ProfileSummary;
