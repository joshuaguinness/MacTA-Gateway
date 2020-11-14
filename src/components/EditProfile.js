import React from "react";
import TextField from "@material-ui/core/TextField";

class EditProfile extends React.Component {
  render() {
    return (
      <div>
        <h3>McMaster University</h3>
        <TextField fullWidth id="programdetails" label="Program Details" defaultValue="Software Engineering and Society"/>
        <TextField id="gpa" label="GPA" defaultValue={10.2}/>
        <h5>Update Contact Details</h5>
        <TextField fullWidth id="phonenumber" label="Phone Number" defaultValue="519-000-1998"/>
        <TextField fullWidth id="backupemail" label="Backup Email" defaultValue="ilovesoftware@hotmail.com"/>
        <TextField fullWidth id="mailingaddress" label="Mailing Address" defaultValue="1998 Main St. W, Hamilton, ON"/>
      </div>
    );
  }
}

export default EditProfile;
