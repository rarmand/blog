import React from "react";
import "./styles.sass";

// tekst do wymiany w razie użycia innego języka
// zamieszczony w innym pliku
// eng -> pl
function TitleTextContainer(props) {
  const lines = props.lines;
  const viewLines = lines.map((line, index) => (
    <span key={index} className="titleTextContainer__text">
      {line}
    </span>
  ));

  return (
    <div className="titleTextContainer">
      <h1 className="titleTextContainer__title">{props.title}</h1>
      {viewLines}
    </div>
  );
}

export default TitleTextContainer;
