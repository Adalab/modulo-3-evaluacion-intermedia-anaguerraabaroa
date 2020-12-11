import React from "react";
import logo from "../images/logo.png";
import "../stylesheets/_Header.scss";

const Header = () => {
  return (
    <header className="header" role="header">
      <img src={logo} title="Pokemon logo" alt="Pokemon logo" />
    </header>
  );
};

export default Header;
