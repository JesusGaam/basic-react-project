import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "./GlobalStyles";

const fontFamily = "Open Sans,sans-serif";
const titleFontFamily =
  "Alegreya Sans SC,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,sans-serif";

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
    h1: {
      fontFamily: titleFontFamily,
      fontSize: "4.8rem",
    },
    h2: {
      fontFamily: titleFontFamily,
      fontSize: "4.0rem",
    },
    h3: {
      fontFamily: titleFontFamily,
      fontSize: "3.2rem",
    },
    h4: {
      fontFamily: titleFontFamily,
      fontSize: "2.4rem",
    },
    h5: {
      fontFamily: titleFontFamily,
      fontSize: "2.1rem",
    },
    h6: {
      fontFamily: titleFontFamily,
      fontSize: "1.8rem",
    },
    body1: {
      fontFamily,
      // fontSize: "1.8rem",
    },
    body2: {
      fontFamily,
      // fontSize: "1.6rem",
    },
  },
  custom: {
    appBarHeight: "70px",
  },
});

const Theme = ({ children }) => {
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
