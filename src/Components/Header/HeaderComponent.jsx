import React, {useState} from "react";
import {Box} from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import {Switch, Route} from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import AddStreetLight from "../BodyComponent/AddStreetLight";
// import Link from "../BodyComponent/Link";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import {useStyles} from "./HeaderStyles";
import MapContainer from "./MapContainer";
import History from "./../BodyComponent/History";
import AddUser from "./../BodyComponent/Dashboard/AddUser";

export default function HeaderComponent() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Box className={classes.wrapper}>
        <Switch>
          {/* <Route path='/' component={<Dashboard />} /> */}
          <Route exact path='/user/history' render={() => <History />} />
          <Route exact path='/user/map' render={() => <MapContainer />} />
          <Route
            exact
            path='/user/add-street-light'
            render={() => <AddStreetLight />}
          />
          <Route exact path='/user/add-user' render={() => <AddUser />} />
          <Route exact path='/user/logout' render={() => <Logout />} />
          <Route exact path='/user/dashboard' render={() => <Dashboard />} />
        </Switch>
      </Box>
    </div>
  );
}
