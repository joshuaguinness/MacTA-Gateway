import React from "react";
import "./Profile.css";

import TextField from "@material-ui/core/TextField";

class PostingCreation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseTitle: "",
      courseCode: "",
      courseDescription: "",
      courseSkills: "",
      courseResponsibilities: "",
      deadline: "",
      startTime: "",
      requiredDocuments: "",
      additionalApplicationQuestions: [],
    };

    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
  }

  handleCourseTitleChange(title) {
      console.log(title);
    this.setState({ courseTitle: title });
  }

  displayApplicationPart() {
    if (this.props.tab === "NamePosting") {
      return (
        <NamePosting
          courseTitle={this.state.courseTitle}
          onCourseTitleChange={this.handleCourseTitleChange}
        />
      );
    } else if (this.props.tab === "PostDetails") {
      return <PostDetails />;
    } else if (this.props.tab === "ApplicationDeadline") {
      return <ApplicationDeadline />;
    } else if (this.props.tab === "RequiredDocuments") {
      return <RequiredDocuments />;
    } else if (this.props.tab === "AdditionalQuestions") {
      return <AdditionalQuestions />;
    }
  }

  render() {
    return <div>{this.displayApplicationPart()}</div>;
  }
}

class NamePosting extends React.Component {

    constructor(props){
        super(props);

        this.changeCourseTitle = this.changeCourseTitle.bind(this);
    }
  
  changeCourseTitle(e) {
    this.props.onCourseTitleChange(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>Please fill out the following text boxes</h3>
        <h5>Please click the 'Complete Step' button when you are done.</h5>
        <TextField
          id="coursetitle"
          label="Course Title"
          variant="outlined"
          margin="dense"
          onChange={this.changeCourseTitle}
        />
        <br />
        <TextField
          id="coursecode"
          label="Course Code"
          variant="outlined"
          margin="dense"
        />
      </div>
    );
  }
}

class PostDetails extends React.Component {
  render() {
    return (
      <div>
        <h3>Please add your posting details in the text box below.</h3>
        <p>Post Details</p>
      </div>
    );
  }
}

class ApplicationDeadline extends React.Component {
  render() {
    return (
      <div>
        <p>Application Deadline</p>
      </div>
    );
  }
}

class RequiredDocuments extends React.Component {
  render() {
    return (
      <div>
        <p>Required Documents</p>
      </div>
    );
  }
}

class AdditionalQuestions extends React.Component {
  render() {
    return (
      <div>
        <p>Additional Questions</p>
      </div>
    );
  }
}

export default PostingCreation;

/* Add post details
- Add course title
- Add course code
- Add description
- Add required skills
- Add job responsibilities 

Set deadline 
- Select month, day, year 
- Select hours, minutes 

Set start time 
- Select month, day, year 
- Select hours, minutes 

Set required documents 
Add additional application questions 
*/
