import React from "react";
import { ReactComponent as Cat } from "./assets/cat.svg";
import "./styles.css";

function Header(props) {
  const headerTitle = "The kitty inner space";
  const menu = { "#about": "About me", "#contact": "Contact", "#blog": "Blog" };
  const viewMenu = Object.keys(menu).map((key, index) => (
    <a className="header__menu--a" href={key} key={index}>
      {menu[key]}
    </a>
  ));

  return (
    <header className="header">
      <Cat className="header__icon" />
      <p className="header__title">{headerTitle}</p>
      <div className="header__menu">
        <nav className="header__menu--nav">{viewMenu}</nav>
      </div>
    </header>
  );
}

export default Header;
