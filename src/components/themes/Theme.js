import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GLOBAL_TOKENS } from "../tokens/GlobalTokes";
import { DARK_MODE_THEME } from "../tokens/DarkModeTokens";
import { LIGHT_MODE_THEME } from "../tokens/LightModeTokens";
import { getURLParameter } from "../../utils/Utilities";

const Theme = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState({});

  useEffect(() => {
    if (getURLParameter("theme") == "dark") {
      setMode("dark");
    }
  }, []);

  useEffect(() => {
    setTheme({
      ...GLOBAL_TOKENS,
      ...(mode === "light" ? LIGHT_MODE_THEME : DARK_MODE_THEME)
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
