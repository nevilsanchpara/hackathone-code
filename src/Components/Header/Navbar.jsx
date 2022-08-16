import React, {useEffect} from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import Notification from "./Navtabs/notification";
import {useStyles} from "./HeaderStyles";
import Messages from "./Navtabs/Messages";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar({handleDrawerOpen}) {
  const classes = useStyles();
  useEffect(() => {});

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logo}>
          Aakalp
        </Typography>
        <Hidden smDown>
          <Box style={{display: "flex"}}>
            {/* <Notification />
              <Messages /> */}
            <h5 className='mt-2'>
              Welcome, {JSON.parse(localStorage.getItem("user")).firstName}
            </h5>
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
