import React from "react";
import "./App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import CreatePosting from "./components/CreatePosting.js";
import ViewPostings from "./components/ViewPostings.js";
import ListAppProf from "./components/ListAppProf.js";
import ReviewApplications from "./components/ReviewApplications.js";
import ApplyPosition from "./components/ApplyPosition.js";
import Profile from "./components/Profile.js";
import ScheduleInterview from "./components/ScheduleInterview.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewChecked: true,
      anchorEl: null,
    };

    this.handleViewChange = this.handleViewChange.bind(this);
    // this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleViewChange(e) {
    this.setState({ viewChecked: e.target.checked });
  }

  // handleProfileClick(e) {
  //   return (
  //     <Router>
  //       <NavLink exact to="/profile">
  //           Profile
  //         </NavLink>
  //     </Router>
  //   );
  // }

  handleMenu(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleClose(e) {
    this.setState({ anchorEl: null });
  }

  render() {
    return (
      <div className="App">
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.viewChecked}
                  onChange={this.handleViewChange}
                  aria-label="login switch"
                />
              }
              label={this.state.viewChecked ? "Student" : "Professor"}
            />
          </FormGroup>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">McMaster Gateway</Typography>
              <Router>
              <NavLink exact to="/createposting">
            Create Posting
          </NavLink>
              </Router>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                    {" "}
                    <Router>
                    <NavLink exact to="/profile">
                      Profile
                    </NavLink>
                    </Router>
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <Router>
          {/* <NavLink exact to="/createposting">
            Create Posting
          </NavLink> */}
          <NavLink exact to="/viewpostings">
            View Postings
          </NavLink>
          <NavLink exact to="/reviewapplications">
            Review Applications
          </NavLink>
          <NavLink exact to="/applyposition">
            Apply for Position
          </NavLink>
          <NavLink exact to="/scheduleinterview">
            Schedule Interview
          </NavLink>

          <Route exact path="/createposting">
            <CreatePosting />
          </Route>
          <Route exact path="/viewpostings">
            <ViewPostings />
          </Route>
          <Route exact path="/reviewapplications">
            <ListAppProf />
          </Route>
          <Route exact path="/applyposition">
            <ApplyPosition />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/reviewapplications1P13">
            <ReviewApplications />
          </Route>
          <Route exact path="/scheduleinterview">
            <ScheduleInterview />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
