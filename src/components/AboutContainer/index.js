import React from "react";
import "./styles.sass";

// tekst do wymiany w razie użycia innego języka
// zamieszczony w innym pliku
// eng -> pl

function AboutContainer(props) {
  const aboutText = [
    "Profesjonalnie podchodząc do sprawy jestem programistką.",
    "Ukończyłam kierunek Informatyka Stosowana na wydziale Fizyki i Informatyki Stosowanej na Akademii Górniczo-Hutniczej w Krakowie. Mogę się pochwalić tytułami magistra inżyniera.",
    "Moją wiedzę i umiejętności rozwijam w technologiach powiązanych z Frontend oraz Mobile Development. Jestem w trakcie nauki UX Design oraz projektowania stron internetowych. Interesuję się również bezpieczeństwem w sieci oraz technologiami backendowymi.",
    "Moim gulty pleasure jest język Python, którego w niedługim czasie zacznę częściej stosować."
  ];

  const texts = [
    "Jestem obecnie absolwentką studiów informatycznych na wydziale Fizyki i Informatyki Stosowanej na AGH w Krakowie.",
    "Bardzo dużo zawdzięczam temu miejscu i poznanym tam ludziom, spełniam również swoje zainteresowania tworząc różnego rodzaju projekty i aplikacje.",
    "Rozwijam się w kierunku Frontend Development oraz Mobile Development. Interesuje mnie również temat cybersecurity oraz zachownia użytkowników w sieci. Od czasu do czasu lubię ruszyć głową ćwicząc różne algorytmy."
  ];
  const textView = texts.map((text, index) => (
    <p className="aboutPanel__text--p" key={index}>
      {text}
    </p>
  ));

  const techList = {
    flutter: {
      name: "Flutter",
      icon: "flutter_icon.png"
    },
    dart: {
      name: "Dart",
      icon: "dart_icon.png"
    },
    javascript: {
      name: "JavaScript",
      icon: "javascript_icon.png"
    },
    reactjs: {
      name: "ReactJS",
      icon: "react_icon.png"
    },
    html: {
      name: "HTML5",
      icon: "html_icon.png"
    },
    css: {
      name: "CSS3",
      icon: "css_icon.png"
    },
    python: {
      name: "Python",
      icon: "python_icon.png"
    }
  };

  const techView = Object.keys(techList).map(key => (
    <li className="aboutPanel__techList--element" key={key}>
      <div className="aboutPanel__techList--div">
        <img
          className="aboutPanel__techList--img"
          src={"/assets/" + techList[key]["icon"]}
          alt=""
        />
        <p className="aboutPanel__techList--title">{techList[key]["name"]}</p>
      </div>
    </li>
  ));

  const name = "Aleksandra Holik";
  const careerTitle = "Software Developer";

  return (
    <section id="about" className="aboutPanel">
      <div className="aboutPanel__career">
        <h2 className="aboutPanel__career--text">{careerTitle}</h2>
      </div>
      <div className="aboutPanel__techList">
        <ul className="aboutPanel__techList--list">{techView}</ul>
      </div>
      <div className="aboutPanel__text">{textView}</div>
    </section>
  );
}

export default AboutContainer;
