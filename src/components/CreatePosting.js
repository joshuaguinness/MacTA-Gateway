import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';

class CreatePosting extends React.Component {
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
  }

  render() {
    return (
      <div>
        {/* <AppBar position="static">
          <Tabs
            // value={value}
            // onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two"  />
            <Tab label="Item Three"  />
          </Tabs>
        </AppBar>
        <TabPanel  index={0}>
          Item One
        </TabPanel>
        <TabPanel  index={1}>
          Item Two
        </TabPanel>
        <TabPanel  index={2}>
          Item Three
        </TabPanel> */}
      </div>
    );
  }
}

export default CreatePosting;

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

/*
Creating Posting Component
Sub component under each one
State store in parent component


*/
