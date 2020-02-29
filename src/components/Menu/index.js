import React from "react";
import "./styles.sass";

function Menu(props) {
  const menu = { "#about": "About me", "#contact": "Contact", "#blog": "Blog" };
  const viewMenu = Object.keys(menu).map((key, index) => (
    <a className="header__menu--a" href={key} key={index}>
      {menu[key]}
    </a>
  ));

  return (
    <nav className="header__menu">
      <nav className="header__menu--nav">{viewMenu}</nav>
    </nav>
  );
}

export default Menu;
