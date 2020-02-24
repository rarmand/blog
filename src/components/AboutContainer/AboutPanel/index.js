import React from "react";
import "./styles.sass";

function AboutPanel(props) {
  return (
    <div className="aboutPanel">
      <h2 className="aboutPanel__career">{props.career}</h2>
    </div>
  );
}

export default AboutPanel;
