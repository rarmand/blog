import React from "react";
import "./styles.css";

function AboutPanel(props) {
  return (
    <div className="aboutPanel">
      <h1 className="aboutPanel__name">{props.name}</h1>
      <h2 className="aboutPanel__career">{props.career}</h2>
    </div>
  );
}

export default AboutPanel;
