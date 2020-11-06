import React from "react";
import EditProfile from "./EditProfile.js";
import ProfileSummary from "./ProfileSummary.js";
import Grid from "@material-ui/core/Grid";

class Profile extends React.Component {
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
            <ProfileSummary />
          </Grid>
          <Grid item xs={7}>
            <EditProfile />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
