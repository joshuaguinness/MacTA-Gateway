import React from "react";
import "./Profile.css";

class PostingCreation extends React.Component {
  constructor(props) {
    super(props);
  }

  displayApplicationPart() {
      if (this.props.tab === "PostDetails"){
          return <PostDetails />
      } else if (this.props.tab === "ApplicationDeadline") {
          return <ApplicationDeadline />
      } else if (this.props.tab === "RequiredDocuments") {
          return <RequiredDocuments />
      } else if (this.props.tab === "AdditionalQuestions") {
          return <AdditionalQuestions />
      }
  }

  render() {
    return (
      <div>
        {this.displayApplicationPart()}
      </div>
    );
  }
}

class PostDetails extends React.Component {
  render() {
    return (
      <div>
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
