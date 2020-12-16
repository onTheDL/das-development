import { createMuiTheme } from '@material-ui/core/styles';

const sparkBlue = '#0B72B9'
const sparkOrange = '#FFBA60'

export default createMuiTheme({
  palette: {
    common: {
      blue: `${sparkBlue}`,
      orange: `${sparkOrange}`
    },
    primary: {
      main: `${sparkBlue}`
    },
    secondary: {
      main: `${sparkOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    }
  }
})
