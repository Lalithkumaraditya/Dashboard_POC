import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
// import Collapse from "@material-ui/core/Collapse";

// import IconExpandLess from "@material-ui/icons/ExpandLess";
// import IconExpandMore from "@material-ui/icons/ExpandMore";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
// import IconLibraryBooks from "@material-ui/icons/LibraryBooks";

const AppMenu: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconDashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Analysis" />
      </ListItem>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconPeople />
        </ListItemIcon>
        <ListItemText primary="Validation" />
      </ListItem>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconBarChart />
        </ListItemIcon>
        <ListItemText primary="Data Import" />
      </ListItem>
      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}></ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItem>
      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}></ListItemIcon>
        <ListItemText primary="Base Data" />
      </ListItem>
      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}></ListItemIcon>
        <ListItemText primary="Emision" />
      </ListItem>
      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}></ListItemIcon>
      </ListItem>
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: "#9BA49E",
    },
  })
);

export default AppMenu;
