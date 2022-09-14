import React from "react";
import ReactDOM from "react-dom";
import GlobalStates from "@/contexts";
import "../src/styles/main.scss";
import Component from "{component}";

ReactDOM.render(
  <GlobalStates>
    <Component />
  </GlobalStates>,
  document.getElementById("app")
);
