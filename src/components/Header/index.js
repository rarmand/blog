import React from "react";
import { ReactComponent as Cat } from "./assets/cat.svg";
import "./styles.sass";
import Menu from "../Menu";

function Header(props) {
  const headerTitle = "The kitty inner space";

  return (
    <>
      <header className="header">
        <Cat className="header__icon" />
        <p className="header__title">{headerTitle}</p>
      </header>
      <Menu />
    </>
  );
}

export default Header;
