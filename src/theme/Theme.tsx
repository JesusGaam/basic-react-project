import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "./GlobalStyles";
import { TITLE_FONT_FAMILY, BODY_FONT_FAMILY } from "@/constants";

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
    fontFamily: TITLE_FONT_FAMILY,
    allVariants: {
      color: "#616161",
    },
    h1: {
      color: "#293D51",
      fontSize: "42px",
      fontWeight: 600,

      "@media (max-width:833px)": {
        fontSize: "38px"
      },
    },
    h2: {
      color: "#293D51",
      fontWeight: 600,
      fontSize: "32px",

      "@media (max-width:833px)": {
        fontSize: "28px"
      },
    },
    h3: {
      color: "#293D51",
      fontWeight: 600,
      fontSize: "28px",

      "@media (max-width:833px)": {
        fontSize: "24px"
      },
    },
    h4: {
      fontSize: "2.4rem",
    },
    h5: {
      fontSize: "2.1rem",
    },
    h6: {
      fontSize: "1.8rem",
    },
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "16px",
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
