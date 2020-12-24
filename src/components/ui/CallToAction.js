import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: "0.7rem",
    height: 35,
    padding: 8,
    marginTop: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      marginTop: "1.0em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed", //parallax
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit", //back to static
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

export default function CallToAction({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const direction = matchesSM ? "column" : "row";

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={direction}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software. <br /> Exponental Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container item justify={matchesSM ? "center" : "undefined"}>
              <Button
                component={Link}
                to="/services"
                variant="outlined"
                className={classes.learnBtn}
                onClick={() => setValue(1)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          className={classes.estimateBtn}
          onClick={() => setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
      {/* <div className={classes.background} /> */}
    </Grid>
  );
}
