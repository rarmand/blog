import React from "react";
import "./styles.sass";

function AboutPanel(props) {
  const techList = props.technologies;
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

  return (
    <div className="aboutPanel">
      <div className="aboutPanel__career">
        <h2 className="aboutPanel__career--text">{props.career}</h2>
      </div>
      <div className="aboutPanel__techList">
        <ul className="aboutPanel__techList--list">{techView}</ul>
      </div>
      <div className="aboutPanel__text">{textView}</div>
    </div>
  );
}

export default AboutPanel;
