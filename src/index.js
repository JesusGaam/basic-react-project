import React from "react";
import ReactDOM from "react-dom";
import Theme from "./theme/Theme";
import GlobalStates from "@/contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, User } from "@/components/pages";

ReactDOM.render(
  <Theme>
    <GlobalStates>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </GlobalStates>
  </Theme>,
  document.getElementById("app")
);
