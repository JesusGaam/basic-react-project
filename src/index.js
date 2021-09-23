import React from "react";
import ReactDOM from "react-dom";
import Component from "./components/pages/Names";


export default {
  init: function (params) {
    ReactDOM.render(<Component />,document.getElementById("app"));
  }
}