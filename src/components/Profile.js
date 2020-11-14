import React from "react";
import EditProfile from "./EditProfile.js";
import ProfileSummary from "./ProfileSummary.js";
import Grid from "@material-ui/core/Grid";
import "./Profile.css"

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
      profilepic: "./static/images/parnasd.jpeg",
      transcript: "",
      password: "admin",
    };

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleProgramChange = this.handleProgramChange.bind(this);
  }

  handlePhoneChange(phone){
    this.setState({phone: phone});
  }

  handleProgramChange(program){
    this.setState({program: program});
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
              onPhoneChange={this.handlePhoneChange}
              onProgramChange={this.handleProgramChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
