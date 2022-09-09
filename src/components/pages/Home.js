import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../organisms/navigation/";

const Home = () => {
  return (
    <>
      <Navigation />
      <div>Aplicación react</div>
      <NavLink to="/user">User</NavLink>
    </>
  );
};

export default Home;
