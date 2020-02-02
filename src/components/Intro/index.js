import React from "react";
import "./styles.css";

// tekst do wymiany w razie użycia innego języka
// zamieszczony w innym pliku
// eng -> pl
function Intro(props) {
  return (
    <div className="introContainer">
      <p className="introContainer__title">Hello guys!</p>
      <p className="introContainer__text">
        My name is Ola Holik and I want to present my author's website. I invite
        you to explore the webpage further, learn about my skills, my former
        projects and new ideas.
      </p>
      <p className="introContainer__text">
        It is not only a portfolio but also my personal collection of thoughts
        written in articles about valuable cases. I wish you find something
        interesting for yourselves.
      </p>
    </div>
  );
}

export default Intro;
