import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";
import "../style/Profile.css";

const styles = {
  root: {
    marginLeft: "30px",
    marginright: "30px",
    marginTop: "10px",
    marginBottom: "10px",
    alignItems: "right",
  },
};

class TranscriptUpload extends React.Component {
  saveFiles(files) {
    this.props.parentSaveFiles(files);
  }

  render() {
    return (
      <div>
        <p>Please upload your transcript as a PDF.</p>
        <DropzoneArea
          initialFiles={this.props.appFiles}
          showFileNamesInPreview={true}
          showPreviewsInDropzone={false}
          showPreviews={true}
          onChange={(files) => this.saveFiles(files)}
        />
      </div>
    );
  }
}

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleProfilePicChange = this.handleProfilePicChange.bind(this);
    this.saveFiles = this.saveFiles.bind(this);
  }

  handlePhoneChange(e) {
    this.props.onPhoneChange(e.target.value);
  }

  handleProgramChange(e) {
    this.props.onProgramChange(e.target.value);
  }

  handleProfilePicChange(e) {
    this.props.onProfilePicChange(e.target.value);
  }

  saveFiles(fileList) {
    this.setState({ files: fileList });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h3>McMaster University</h3>
        {this.props.viewChecked ? (
          <div>
            <TextField
              className={classes.root}
              fullWidth
              id="programdetails"
              variant="outlined"
              label="Program Details"
              defaultValue={this.props.program}
              onChange={this.handleProgramChange}
            />
            <TextField
              className={classes.root}
              variant="outlined"
              type="number"
              label="GPA"
              defaultValue={this.props.gpa}
            />
          </div>
        ) : (
          <TextField
            className={classes.root}
            fullWidth
            id="programdetails"
            variant="outlined"
            label="Department"
            defaultValue={this.props.program}
            onChange={this.handleProgramChange}
          />
        )}
        <h4>Contact Details</h4>
        <TextField
          className={classes.root}
          id="phonenumber"
          variant="outlined"
          label="Phone Number"
          defaultValue={this.props.phone}
          onChange={this.handlePhoneChange}
        />
        <TextField
          className={classes.root}
          id="backupemail"
          variant="outlined"
          label="Backup Email"
          defaultValue={this.props.backupemail}
        />
        <TextField
          className={classes.root}
          fullWidth
          id="mailingaddress"
          variant="outlined"
          label="Mailing Address"
          defaultValue={this.props.mailing}
        />
        {this.props.viewChecked ? (
          <div>
            <h4>Banking Details</h4>
            <TextField
              className={classes.root}
              id="institution"
              variant="outlined"
              type="number"
              label="Institution"
              defaultValue={this.props.institution}
            />
            <TextField
              className={classes.root}
              id="transit"
              variant="outlined"
              type="number"
              label="Transit"
              defaultValue={this.props.transit}
            />
            <TextField
              className={classes.root}
              id="account"
              variant="outlined"
              type="number"
              label="Account"
              defaultValue={this.props.account}
            />
          </div>
        ) : null}
        <h4>Change Password</h4>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          defaultValue={this.props.password}
        />
        <h4>Update Profile Picture</h4>
        <p>Please enter the site link for the new profile picture.</p>
        <TextField
          className={classes.root}
          id="profilepic"
          variant="outlined"
          label="Profile Picture Link"
          defaultValue={this.props.profilePic}
          onChange={this.handleProfilePicChange}
        />
        {this.props.viewChecked ? (
          <div>
            <h4>Upload Transcript</h4>
            <div>
              <TranscriptUpload
                appFiles={this.state.files}
                parentSaveFiles={this.saveFiles}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfile);
