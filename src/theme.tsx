import { createTheme} from "@mui/material/styles";

// Custom colors from the design
const colors = {
  primary: '#FC4747',    
  secondary: '#5A699F',   
  dark: '#10141E',          
  accent: '#161D2F',       
  white: '#FFFFFF',         
};


const typography = {
  fontFamily: `'Outfit Light', sans-serif`,
  h1: {
    fontSize: '32px',
    fontWeight: 300,
  },
  h2: {
    fontSize: '24px',
    fontWeight: 300, 
  },
  h3: {
    fontSize: '24px',
    fontWeight: 500,
  },
  h4: {
    fontSize: '18px',
    fontWeight: 500,
  },
  body1: {
    fontSize: '15px',
    fontWeight: 300,
  },
  body2: {
    fontSize: '13px',
    fontWeight: 300,
  },
};


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.dark,
      paper: colors.accent,
    },
    text: {
      primary: colors.white,
    },
  },
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme