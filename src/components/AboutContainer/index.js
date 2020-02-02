import React from "react";
import TechList from "../TechList";
import AboutPanel from "../AboutPanel";
import AboutInfo from "../AboutInfo";

// tekst do wymiany w razie użycia innego języka
// zamieszczony w innym pliku
// eng -> pl

function AboutContainer(props) {
  return (
    <div>
      <AboutPanel name="Aleksandra Holik" career="Frontend Developer" />
      <AboutInfo />
      <TechList />
    </div>
  );
}

export default AboutContainer;
