import React from "react";
import ReactDOM from "react-dom";
import GlobalStates from "@/contexts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DesignSystem, EmitProps, User } from "@/components/pages";
import "./styles/main.scss";

ReactDOM.render(
  <GlobalStates>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/design-system" />}
        />
        <Route exact path="/design-system" element={<DesignSystem />} />
        <Route exact path="/emit-props" element={<EmitProps />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  </GlobalStates>,
  document.getElementById("app")
);
