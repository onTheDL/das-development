import React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Box,
  Container,
  Tab,
  Tabs,

} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/webdev-logo.svg'

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "6em",
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
}))

export default function Header(props) {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
             <img src={logo} alt='company logo' className={classes.logo} />
             <Tabs className={classes.tabContainer}>
               <Tab className={classes.tab} label='Home' />
               <Tab className={classes.tab} label='Services' />
               <Tab className={classes.tab} label='The Revolution' />
               <Tab className={classes.tab} label='About Us' />
               <Tab className={classes.tab} label='Contact Us' />
             </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* div with attr adds spacing below toolbar to show following element */}
      <div className={classes.toolbarMargin} /> 
    </>
  );
}
