import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import root from "../assets/root.svg";

import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Let me show you my plan for sending you home. Please excuse the
              crudity of this model, I didn't have time to build it to scale or
              to paint it. Indeed I will, roll em. I, Doctor Emmett Brown, am
              about to embark on an historic journey.
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Stand tall, boy, have some respect for yourself. Don't you know
              that if you let people walk all over you know, they'll be walking
              all over you for the rest of your life?
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Which one's your pop? Yeah, but I never picked a fight in my
              entire life. Precisely. Look me up when you get there, guess I'll
              be about 47. Look, George, I'm telling you George, if you do not
              ask Lorraine to that dance, I'm gonna regret it for the rest of my
              life.
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              I don't know what it is but when I kiss you, it's like kissing my
              brother. I guess that doesn't make any sense, does it?
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              I think we need a rematch. McFly. Marty, you didn't fall asleep,
              did you? Who, who? He laid out Biff in one punch. I never knew he
              had it in him. He never stood up to Biff in his life.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img src={forwardArrow} alt="Forward to Mobile Apps" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time.</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy.</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money.</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="money" />
          </Grid>
        </Grid>
      </Grid>

      {/*-----DOCUMENTS AND SCALE SECTION-----*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
      >
        {/*---Documents Block---*/}
        <Grid item container className={classes.itemContainer} md>
          <Grid
            item
            container
            direction="column"
            style={{ marginBottom: matchesMD ? "15em" : 0 }}
            md
          >
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>

              <Typography variant="body1" paragraph>
                Where were we. Marty, you're acting like you haven't seen me in
                a week. I don't know, but I'm gonna find out.
              </Typography>

              <Typography variant="body1" paragraph>
                Please note that Einstein's clock is in complete synchronization
                with my control watch. Hey wait, wait a minute, who are you?
              </Typography>

              <Typography variant="body1" paragraph>
                Whoa, whoa, Biff, what's that? Hey Biff, check out this guy's
                life preserver, dork thinks he's gonna drown
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        {/*---Scale Block---*/}
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              isStopped={true}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>

              <Typography variant="body1" align="right" paragraph>
                Calm down, Marty, I didn't disintegrate anything. The molecular
                structure of Einstein and the car are completely intact. You
                can't, uh, that is, uh, nobody's home. Yeah, gimme a Tab.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*----- ROOT-CAUSE ANALYSIS SECTION-----*/}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={root}
              alt="tree with roots extending out"
              height="450em"
              width="450em"
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Wait a minute. Wait a minute, Doc. Are you telling me that it's
              8:25? I still don't understand, how am I supposed to go to the
              dance with her, if she's already going to the dance with you.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/*-----AUTOMATION AND UX SECTION-----*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
        style={{ marginBottom: "10em" }}
      >
        {/*---Automation Block---*/}
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>

              <Typography variant="body1" paragraph>
                Why waste time when you don't have to?
              </Typography>

              <Typography variant="body1" paragraph>
                About how far ahead are you going? Yeah, I guessed you're a
                sailor, aren't you, that's why you wear that life preserver.
                Doc, I'm from the future.
              </Typography>

              <Typography variant="body1" paragraph>
                I have to tell you about the future. Science Fiction Theater.
                Hey Dad, George, hey, you on the bike. Yeah. I'll get it back to
                you, alright?
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>

        {/*-----UX Design Block-----*/}
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={uxOptions}
              isStopped={true}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                User Experience Design
              </Typography>

              <Typography variant="body1" align="right" paragraph>
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                According to the flyer, at 10:04 pm lightning will strike the
                clocktower sending one point twenty-one gigawatts into the
                flux-capacitor, sending you back to 1985. Alright now, watch
                this.
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                It's about the future, isn't it?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
