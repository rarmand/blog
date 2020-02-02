import React from "react";
import "./styles.css";

function AboutPanel(props) {
  return (
    <div className="aboutPanel">
      <p className="aboutPanel__name">{props.name}</p>
      <p className="aboutPanel__career">{props.career}</p>
    </div>
  );
}

export default AboutPanel;
