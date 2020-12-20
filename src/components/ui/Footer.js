import React from 'react'
import { 
  makeStyles,
  Grid
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    height: "18em",
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "12em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "8em",
    },
    
  },
  
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      Footer
    </footer>
  )
}
