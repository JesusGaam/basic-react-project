import React from "react";
import { GlobalStyles as GlobalStylesMui } from "@mui/material";

const GlobalStyles = () => {
  return (
    <GlobalStylesMui
      styles={(theme) => ({
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          paddingTop: theme.custom.appBarHeight,
          margin: 0,
          [theme.breakpoints.down("sm")]: {
            paddingBottom: theme.custom.bottomNavigationHeight,
          },
        },
      })}
    />
  );
};

export default GlobalStyles 