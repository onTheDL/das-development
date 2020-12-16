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
    h3: {
      fontWeight: 300
    }
  }
})
