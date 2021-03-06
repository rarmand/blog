import React from "react";
import "./styles.sass";
import PostCarousel from "../PostCarousel";

function BlogContainer(props) {
  const title = "Blog sfera";
  const texts = [
    "Pozostałe zainteresowania zawieram w postach na moim blogu. Nie wszystkie posty, a być może żadne z nich, nie będą dane wam być odczytane! Chcę w nich zawrzeć swoje przemyślenia w obecnych językach, których się uczę.",
    "Eksperyment rozpoczęty... Do dzieła!"
  ];

  const textView = texts.map((text, index) => (
    <p className="blogContainer__text--p" key={index}>
      {text}
    </p>
  ));

  return (
    <section className="blogContainer">
      <div className="blogContainer__title">
        <div className="blogContainer__title--bg1"></div>
        <div className="blogContainer__title--bg2">
          <p className="blogContainer__title--p">{title}</p>
        </div>
      </div>
      <div className="blogContainer__text">{textView}</div>
      <PostCarousel />
    </section>
  );
}

export default BlogContainer;
