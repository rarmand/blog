import React from "react";
import TechList from "../TechList";
import AboutPanel from "../AboutPanel";
import TitleTextContainer from "../TitleTextContainer";

// tekst do wymiany w razie użycia innego języka
// zamieszczony w innym pliku
// eng -> pl

function AboutContainer(props) {
  const aboutTitle = "About me";
  const aboutText = [
    "Profesjonalnie podchodząc do sprawy jestem programistką.",
    "Ukończyłam kierunek Informatyka Stosowana na wydziale Fizyki i Informatyki Stosowanej na Akademii Górniczo-Hutniczej w Krakowie. Mogę się pochwalić tytułami magistra inżyniera.",
    "Moją wiedzę i umiejętności rozwijam w technologiach powiązanych z Frontend oraz Mobile Development. Jestem w trakcie nauki UX Design oraz projektowania stron internetowych. Interesuję się również bezpieczeństwem w sieci oraz technologiami backendowymi.",
    "Moim gulty pleasure jest język Python, którego w niedługim czasie zacznę częściej stosować."
  ];

  const technologiesObj = {
    javascript: "JavaScript",
    reactjs: "ReactJS",
    flutter: "Flutter",
    dart: "Dart",
    htmlcss: "HTML & CSS",
    python: "Python"
  };

  return (
    <div>
      <AboutPanel name="Aleksandra Holik" career="Frontend Developer" />
      <TitleTextContainer title={aboutTitle} lines={aboutText} />
      <TechList technologies={technologiesObj} />
    </div>
  );
}

export default AboutContainer;
