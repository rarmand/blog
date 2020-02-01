import React from "react";
import { ReactComponent as Cat } from "../../assets/cat.svg";

function Header(props) {
  return (
    <header className="header">
      <Cat className="header__icon" height="280" width="280"></Cat>
      <p className="header__title">The inner space</p>
      <nav className="header__menu">
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
