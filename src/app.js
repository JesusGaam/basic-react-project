import React from "react";
import ReactDOM from "react-dom";
import Theme from "@/theme/Theme";
import GlobalStates from "@/contexts";
import Component from "{component}";

ReactDOM.render(
  <Theme>
    <GlobalStates>
      <Component />
    </GlobalStates>
  </Theme>,
  document.getElementById("app")
);
