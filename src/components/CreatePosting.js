import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepButton from '@material-ui/core/StepButton';
import {
  Grid,
  ButtonGroup,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
// import { DropzoneArea } from "material-ui-dropzone";

import PostingCreation from './PostingCreation.js'


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
      active: "ReqDoc"
    };

    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
  }

  handleCourseTitleChange(title) {
    this.setState({ courseTitle: title });
  }

  // Directly call the sub components from within here and get right of the middle man, will also allow easier passing of state and such

  render() {
    return (
      <div className={"background"}>
        <div className={"foreground"}>
          <h1>{this.state.jobTitle} Application</h1>
          <Grid container spacing={2}>
            <Grid container item justify="center">
              <ButtonGroup disableElevation variant="contained" color="primary">
                <Button
                  onClick={(event) => this.setState({ active: "ReqDoc" })}
                >
                  Required Documents
                </Button>
                <Button
                  onClick={(event) => this.setState({ active: "Questions" })}
                >
                  Additional Questions
                </Button>
                <Button
                  onClick={(event) => this.setState({ active: "Review" })}
                >
                  Review Application
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Name of Posting', 'Post Details', 'Application Deadline', 'Required Documents', 'Add Additional Questions', 'Review'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PostingCreation tab='NamePosting' />
    case 1:
      return <PostingCreation tab='PostDetails' />;
    case 2:
      return <PostingCreation tab='ApplicationDeadline' />;
    case 3:
      return <PostingCreation tab='RequiredDocuments' />;
    case 4:
      return <PostingCreation tab='AdditionalQuestions' />;
    case 5:
      return 'Review';
    default:
      return 'Unknown step';
  }
}

function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography component={'span'} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
