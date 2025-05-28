import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "./GlobalStyles";

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css'


declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomThemeOptions;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: CustomThemeOptions;
  }
}

interface CustomThemeOptions {
  appBarHeight: number;
  bottomNavigationHeight: number;
  pxContainer: string;
  pyContainer: string;
  maxWidthContainer: string;
  degraded: string[];
}

const shadows = [
  "none",
  "0 0 10px 0px rgb(0, 0, 0, 0.2)",
  "0 0 10px 2px rgb(0, 0, 0, 0.2)",
  "0 0 30px -5px rgb(0, 0, 0, 0.12)",
  "0 0 30px -5px rgb(0, 0, 0, 0.18)",
];

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#616162",
    },
    primary: {
      light: "#b2dbfb",
      main: "#2196f3",
      dark: "#0d8aee",
    },
    secondary: {
      light: "#ffeb99",
      main: "#ffcd00",
      dark: "#ffd733",
      contrastText: "#2196f3",
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    allVariants: {
      color: "#616161",
    },
    h1: {
      color: "#293D51",
      fontSize: "42px",
      fontWeight: 600,
      fontFamily: 'Montserrat, sans-serif',

      "@media (max-width:833px)": {
        fontSize: "38px"
      },
    },
    h2: {
      color: "#293D51",
      fontWeight: 600,
      fontSize: "32px",
      fontFamily: 'Montserrat, sans-serif',

      "@media (max-width:833px)": {
        fontSize: "28px"
      },
    },
    h3: {
      color: "#293D51",
      fontWeight: 600,
      fontSize: "28px",
      fontFamily: 'Montserrat, sans-serif',

      "@media (max-width:833px)": {
        fontSize: "24px"
      },
    },
    h4: {
      fontSize: "2.4rem",
      fontFamily: 'Montserrat, sans-serif',
    },
    h5: {
      fontSize: "2.1rem",
      fontFamily: 'Montserrat, sans-serif',
    },
    h6: {
      fontSize: "1.8rem",
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontSize: "18px",
      fontFamily: 'Montserrat, sans-serif',
    },
    body2: {
      fontSize: "16px",
      fontFamily: 'Montserrat, sans-serif',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 440,
      md: 834,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "16px",
          borderRadius: 40,
          textTransform: "none",
          fontFamily: 'Montserrat, sans-serif',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF6C03',
              borderRadius: "12px"
            },
            '&:hover fieldset': {
              borderColor: '#1B1F6B', // Cambiar el color del borde al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1B1F6B', // Cambiar el color del borde cuando el campo está enfocado
            },
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "&.MuiFormLabel-root": {
            color: "#545454"
          },
          ".MuiFormControlLabel-label": {
            "color": "#545454"
          },

          '& .MuiCheckbox-root': {
            color: "#4C61BF33",
            '&.Mui-checked': {
              color: "#FF6C03",
            },
            '.MuiSvgIcon-root': {
              fontSize: 26
            },
          },
        },
      },
    },
  },
  custom: {
    appBarHeight: 84,
    bottomNavigationHeight: 56,
    pxContainer: "10px",
    pyContainer: "60px",
    maxWidthContainer: "1200px",
    degraded: [
      "linear-gradient(90deg, #e28d8c, #eec39c)",
      "linear-gradient(90deg, #8168ef, #e1898f)",
    ],
  },
});

const Theme = ({ children }: { children: any }) => {
  for (const i in shadows) {
    theme.shadows[i] = shadows[i];
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
