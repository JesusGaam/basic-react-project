import React from "react";
import "./styles/main.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  DesignSystem,
  EmitProps,
  MobxSPA,
  NamesMobx,
} from "@/components/pages";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={<Navigate replace to="/design-system" />}
      />
      <Route exact path="/design-system" element={<DesignSystem />} />
      <Route exact path="/emit-props" element={<EmitProps />} />
      <Route exact path="/mobx-spa" element={<MobxSPA />} />
      <Route exact path="/mobx-names" element={<NamesMobx />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
