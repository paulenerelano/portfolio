import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  drawerFont: '#EFFCEB', // drawer font
  drawerBG: '#254E58',
  bannerBG: '#254E58',
  defaultBG: '#88BDBC',

  textPrimary: '#000000',
  textSecondary: '#EFFCEB',

  paper: '#EFFCEB',

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
      bar: colors.bannerBG,
    },
    secondary: {
      main: colors.white,
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
        color: colors.textSecondary
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