import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  peach: '#FFAAA0',
  lightBlue: '#87D4D1',
  teal: '#8AD0C2',
  lightYellow: '#FEFEA0',
  purple: '#838BC2',
  blueGreen: '#516D79',
  appleGreen: '#EDFFDD',
  dirtyWhite: '#F8F8F8',
  black: '#000000',
  white: '#FFFFFF',
}

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.white,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.dirtyWhite,
      paper: colors.lightBlue,
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h4 : {
      fontWeight: '800',
    }
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: colors.white,
      }
    },
    MuiSvgIcon: {
      colorSecondary: {
        color: colors.white,
      }
    },
    MuiTypography: {
      colorTextPrimary: {
        color: colors.black,
      },
      colorTextSecondary: {
        color: colors.black,
      },
    },
    MuiDrawer: {
      paper: {
        background: colors.peach,
        '& *': {
           color: colors.lightYellow, 
        },
      },
    },
  }
});

export default theme;