import React from "react";
import { ReactComponent as Cat } from "../../assets/cat.svg";
import "./styles.css";

function Header(props) {
  return (
    <header className="header">
      <Cat className="header__icon" />
      <p className="header__title">The inner space</p>
      <div className="header__menu">
        <nav className="header__menu--nav">
          <a className="header__menu--a" href="#about">
            About me
          </a>
          <a className="header__menu--a" href="#contact">
            Contact
          </a>
          <a className="header__menu--a" href="#blog">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
