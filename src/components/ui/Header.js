import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Box,
  Container,
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
  }
}))

export default function Header(props) {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
             <img src={logo} alt='company logo' className={classes.logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* div with attr adds spacing below toolbar to show following element */}
      <div className={classes.toolbarMargin} /> 
    </>
  );
}
