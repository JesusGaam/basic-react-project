import React, { useState } from "react";
import "./Navbar.scss";

import Logo from "img/alien.svg";
import Menu from "img/menu.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("close");

  const clickHamburgerMenu = () => {
    setOpenMenu(openMenu === "open" ? "close" : "open");
    document.body.style.overflow = openMenu === "open" ? "" : "hidden";
  };
  return (
    <>
      <div className="navbar-page">
        <div className="grid">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="link-container">
            <div className="desktop">
              <a href="/#nosotros">NOSOTROS</a>
              <a href="/#productos">PRODUCTOS</a>
              <a href="/#carta">CARTA</a>
              <a href="/#horario">HORARIO</a>
            </div>
          </div>
          <div className="menu-container" onClick={clickHamburgerMenu}>
            <Menu className="mobile" />
          </div>
        </div>
      </div>
      <nav className={`container mobile-menu ${openMenu}`}>
        <div className="background"></div>
        <div className="row">
          <div>
            <a href="/#nosotros" onClick={clickHamburgerMenu}>
              NOSOTROS
            </a>
          </div>
          <div>
            <a href="/#productos" onClick={clickHamburgerMenu}>
              PRODUCTOS
            </a>
          </div>
          <div>
            <a href="/#carta" onClick={clickHamburgerMenu}>
              CARTA
            </a>
          </div>
          <div>
            <a href="/#horario" onClick={clickHamburgerMenu}>
              HORARIO
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
