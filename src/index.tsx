import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Theme from "./theme/Theme";
import GlobalStates from "@/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("pages/Home"));
const User = lazy(() => import("pages/User"));

ReactDOM.render(
  <Theme>
    <GlobalStates>
      <HelmetProvider>
        <Suspense fallback={<div>loading...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </HelmetProvider>
    </GlobalStates>
  </Theme>,
  document.getElementById("app")
);
