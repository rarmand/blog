import React from "react";
import "./styles.css";

// tekst do wymiany w razie użycia innego języka
// zamieszczony w innym pliku
// eng -> pl
function TitleTextContainer(props) {
  return (
    <div className="titleTextContainer">
      <h1 className="titleTextContainer__title">{props.title}</h1>
      {props.lines}
    </div>
  );
}

export default TitleTextContainer;
