import React from "react";
import EditProfile from "./EditProfile.js";
import ProfileSummary from "./ProfileSummary.js";
import Grid from "@material-ui/core/Grid";
import "../style/Profile.css"

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gpa: 10.2,
      program: "Software Engineering and Society",
      phone: "519-000-1998",
      backupemail: "ilovesoftware@hotmail.com",
      mailing: "1998 Main St. W, Hamilton, ON",
      institution: "03",
      transit: "12345",
      account: "98765432",
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/David_Parnas.jpg/225px-David_Parnas.jpg",
      transcript: "",
      password: "password123",
    };

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleProfilePicChange = this.handleProfilePicChange.bind(this);
  }

  handlePhoneChange(phone){
    this.setState({phone: phone});
  }

  handleProgramChange(program){
    this.setState({program: program});
  }

  handleProfilePicChange(pic){
    this.setState({profilePic: pic});
  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={5}>
            <div className="summaryprofile">
            <ProfileSummary
            style={{borderRightStyle: "solid", borderWidth: "1px"}}
              program={this.state.program}
              phone={this.state.phone}
              profilePic={this.state.profilePic}
            />
            </div>
          </Grid>
          <Grid item xs={7}>
            <EditProfile
              gpa={this.state.gpa}
              program={this.state.program}
              phone={this.state.phone}
              backupemail={this.state.backupemail}
              mailing={this.state.mailing}
              institution={this.state.institution}
              transit={this.state.transit}
              account={this.state.account}
              password={this.state.password}
              profilePic={this.state.profilePic}
              onPhoneChange={this.handlePhoneChange}
              onProgramChange={this.handleProgramChange}
              onProfilePicChange={this.handleProfilePicChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
