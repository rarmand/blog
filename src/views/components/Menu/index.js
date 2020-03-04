import React from "react";
import "./styles.sass";
import { HashLink as Link } from "react-router-hash-link";

function Menu(props) {
  return (
    <nav className="header__menu">
      <nav className="header__menu--nav">
        <Link smooth className="header__menu--a" to="/#about">
          About me
        </Link>
        <Link smooth className="header__menu--a" to="/#contact">
          Contact
        </Link>
        <Link className="header__menu--a" to="/blog">
          Blog
        </Link>
        <Link class="header__menu--a" to="/post">
          Test Post
        </Link>
      </nav>
    </nav>
  );
}

export default Menu;
