import React from "react";
import ReactDOM from "react-dom";
import Theme from "./components/themes/Theme";
import Component from "./components/pages/DesignSystem";
import GlobalStyle from './components/themes/globalStyles';

ReactDOM.render(
  <Theme>
    <Component />
    <GlobalStyle />
  </Theme>,
  document.getElementById("app"));
