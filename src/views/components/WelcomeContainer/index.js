import React from "react";
import "./styles.sass";

function WelcomeContainer() {
  const title = "Witam w moim wewnętrznym świecie!";
  const texts = [
    "Na mojej autorskiej stronie internetowej chcę podzielić się ze światem swoimi przemyśleniami, tym, co mnie gryzie, co mnie trapi. Chcę również ćwiczyć swoje umiejętności w projektowaniu i pisaniu stron internetowych, dzielić się wiedzą i pewnymi spostrzeżeniami z otaczającego mnie światka dorosłości.",
    "Ale najpierw...",
    "Pozwolicie, że się przedstawię..."
  ];

  const textView = texts.map((text, index) => (
    <p className="welcomeContainer__p" key={index}>
      {text}
    </p>
  ));

  return (
    <section className="welcomeContainer">
      <h2 className="welcomeContainer__title">{title}</h2>
      {textView}
    </section>
  );
}

export default WelcomeContainer;
