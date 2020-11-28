import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#FFEE58', // drawer font,
  color1: '#424242',  // drawerBG, navbarBG
  color1Dark: '#333333',
  defaultBG: '#AAAAAA', // default BG

  textPrimary: '#000000',
  textSecondary: '#FFEE58',

  dirtyWhite: '#F8F8F8',
  gray: '#555555',
  black: '#000000',
  yellow: '#FFEB3B',
  white: '#FFFFFF',
}

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.black,
      bar: colors.color1,
    },
    secondary: {
      main: colors.white,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.defaultBG,
      paper: colors.primary,
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
        color: colors.textPrimary,
      },
      colorTextSecondary: {
        color: colors.textSecondary,
      }
    },
    MuiDrawer: {
      paper: {
        background: colors.color1,
        '& *': {
           color: colors.primary, 
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.yellow,
        color: colors.textPrimary
      } 
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: colors.color1,
        color: colors.textSecondary
      }
    }
  }
});

export default theme;