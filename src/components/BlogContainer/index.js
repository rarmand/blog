import React from "react";
import "./styles.sass";

function BlogContainer(props) {
  const title = "Blog sfera";
  const texts = [
    "Pozostałe zainteresowania zawieram w postach na moim blogu. Nie wszystkie posty, a być może żadne z nich, nie będą dane wam być odczytane! Chcę w nich zawrzeć swoje przemyślenia w obecnych językach, których się uczę.",
    "Eksperyment rozpoczęty... Do dzieła!"
  ];

  return (
    <div className="blogContainer">
      <p className="blogContainer__p">Blog sfera</p>
      <div className="blogContainer__bg1"></div>
      <div className="blogContainer__bg2"></div>
    </div>
  );
}

export default BlogContainer;
