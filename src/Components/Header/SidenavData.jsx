import React, {useState, useEffect} from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {NavLink} from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {useStyles} from "./HeaderStyles";
import HistoryIcon from "@mui/icons-material/History";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function SidenavData({handleDrawerClose}) {
  const classes = useStyles();
  const [type, setType] = useState();
  const [listItemData, setListItemData] = useState();
  useEffect(() => {
    let a = localStorage.getItem("type");
    setType(a);
    console.log(type);
    if (a === "supervisor") {
      setListItemData([
        {
          label: "Dashboard",
          link: "/user/dashboard",
          icon: <DashboardIcon />,
        },
        {label: "Map", link: "/user/map", icon: <LocationOnIcon />},
        {
          label: "Add Streetlight",
          link: "/user/add-street-light",
          icon: <AddCircleIcon />,
        },
        {
          label: "Add Worker",
          link: "/user/add-user",
          icon: <PersonAddIcon />,
        },
        {
          label: "History",
          link: "/user/history",
          icon: <HistoryIcon />,
        },
        {label: "Logout", link: "/user/logout", icon: <ExitToAppIcon />},
      ]);
    } else {
      setListItemData([
        {
          label: "Dashboard",
          link: "/user/dashboard",
          icon: <DashboardIcon />,
        },
        {label: "Map", link: "/user/map", icon: <LocationOnIcon />},
        {
          label: "Add Supervisor",
          link: "/user/add-user",
          icon: <PersonAddIcon />,
        },
        {
          label: "History",
          link: "/user/history",
          icon: <HistoryIcon />,
        },
        {label: "Logout", link: "/user/logout", icon: <ExitToAppIcon />},
      ]);
    }
  }, []);

  return (
    <List>
      {listItemData?.map((item, i) => (
        <Button
          size='small'
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}>
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
