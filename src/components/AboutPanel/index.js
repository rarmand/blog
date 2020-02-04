import React from "react";
import "./styles.css";

function AboutPanel(props) {
  return (
    <div className="aboutPanel">
      <p className="aboutPanel__name">{props.name}</p>
      <span className="aboutPanel__career">
        ... or maybe just Software Developer
      </span>
    </div>
  );
}

export default AboutPanel;
