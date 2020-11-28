import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  color1: '#B6E4D0',
  color1dark: '#3D5A59',
  color2: '#FCB5AC',

  dirtyWhite: '#F8F8F8',
  gray: '#555555',
  black: '#000000',
  white: '#FFFFFF',
}

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.black,
      bar: colors.color1dark,
    },
    secondary: {
      main: colors.white,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.dirtyWhite,
      paper: colors.color1dark,
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h4 : {
      fontWeight: '800',
    },
    h5 : {
      fontWeight: '300',
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
        color: colors.dirtyWhite,
      }
    },
    MuiDrawer: {
      paper: {
        background: colors.color1,
        '& *': {
           color: colors.color1dark, 
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.color1,
      } 
    }
  }
});

export default theme;