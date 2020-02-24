import React from "react";
import "./styles.sass";
import Menu from "../Menu";

function Header(props) {
  const headerTitle = "The kitty inner space";
  const headerSubtitle = "programowanie - nauka - języki obce - filozofia";

  return (
    <header className="header">
      <div className="header__component">
        <h1 className="header__title">{headerTitle}</h1>
        <p className="header__p">{headerSubtitle}</p>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
