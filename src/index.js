import React from "react";
import ReactDOM from "react-dom";
import Theme from "./theme/Theme";
import App from "@/components/pages/App";
import GlobalStates from "@/contexts";

ReactDOM.render(
  <Theme>
    <GlobalStates>
      <App />
    </GlobalStates>
  </Theme>,
  document.getElementById("app")
);
