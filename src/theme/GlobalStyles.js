import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
export default () => {
  return (
    <GlobalStyles
      styles={(theme) => ({
        body: { paddingTop: theme.custom.appBarHeight },
      })}
    />
  );
};
