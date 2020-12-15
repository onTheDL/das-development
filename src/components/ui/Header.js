import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
} from "@material-ui/core";

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

export default function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>Spark Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
