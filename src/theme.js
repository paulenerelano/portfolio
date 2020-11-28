import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  drawerFont: '#F9F9F7', // drawer font
  drawerBG: '#d28648',
  bannerBG: '#F9F9F7',
  defaultBG: '#F9F9F7',

  textPrimary: '#542A48',
  textSecondary: '#d28648',

  paper: '#ecb663',

  black: '#000000',
}

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.textPrimary,
      bar: colors.bannerBG,
    },
    secondary: {
      main: colors.drawerBG,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.defaultBG,
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
        background: colors.drawerBG,
        '& *': {
           color: colors.drawerFont, 
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.paper,
        color: colors.textPrimary
      } 
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: colors.drawerBG,
        color: colors.drawerFont
      }
    },
    MuiTimelineDot: {
      defaultGrey: {
        backgroundColor: colors.textSecondary
      }
    },
    MuiTimelineConnector: {
      root: {
        backgroundColor: colors.textSecondary
      }
    }
  }
});

export default theme;