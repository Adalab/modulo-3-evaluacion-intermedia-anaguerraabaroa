import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__wrapper">
        <img
          className="header__logo"
          src={logo}
          title="Pokemon logo"
          alt="Pokemon logo"
        />
      </div>
      <div className="header__stripe"></div>
      <div className="header__button"></div>
    </header>
  );
};

export default Header;
