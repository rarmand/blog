import React from "react";
import "./styles.sass";
import Menu from "../Menu";

function Header(props) {
  const headerTitle = "The kitty inner space";

  return (
    <>
      <header className="header">
        <h1 className="header__title">{headerTitle}</h1>
      </header>
      <Menu />
    </>
  );
}

export default Header;
