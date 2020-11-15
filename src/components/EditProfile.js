import React from "react";
import PropTypes from 'prop-types'
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import "./Profile.css"

const styles = {
  root: {
    marginLeft: '30px',
    marginright: "30px",
    marginTop: "10px",
    marginBottom: "10px",
    alignItems: "right"
  },
};

class EditProfile extends React.Component {

  constructor(props) {
    super(props);

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleProgramChange = this.handleProgramChange.bind(this);
  }

  handlePhoneChange(e) {
    this.props.onPhoneChange(e.target.value);
  }

  handleProgramChange(e) {
    this.props.onProgramChange(e.target.value);
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <h3>McMaster University</h3>
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
          className="gpa"
          label="GPA"
          defaultValue={this.props.gpa}
        />
        <h5>Contact Details</h5>
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
        <h5>Banking Details</h5>
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
        <h5>Change Password</h5>
      </div>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfile);