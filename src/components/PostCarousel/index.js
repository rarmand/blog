import React from "react";
import "./styles.sass";

function PostCarousel(props) {
  const postsObj = {
    post1: {
      title:
        "To jest tytuł pierwszego postu na moim blogu, To jest tytuł pierwszego",
      tags: ["english", "programming"],

      text:
        "Taki tekst do dodania, Taki tekst do dodania, Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi. Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi"
    },
    post2: {
      title: "To jest tytuł pierwszego postu na moim blogu",
      tags: ["polish", "science"],
      text:
        "Taki tekst do dodania, Taki tekst do dodania, Taki tekst do dodania, Taki tekst do dodania, Taki tekst do dodania, Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi. Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi"
    },
    post3: {
      title: "To jest tytuł pierwszego postu na moim blogu",
      tags: ["russian", "language"],
      text:
        "do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi. Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi"
    }
  };

  const postButton = "Czytaj więcej";

  // TODO: do naprawy
  const postsView = Object.keys(postsObj).map(key =>
    key === "post2" ? (
      <div key={key} className="postCarousel__post--mainPost">
        <h3 className="postCarousel__post--title">{postsObj[key]["title"]}</h3>
        <h5 className="postCarousel__post--tag">#{postsObj[key]["tags"][0]}</h5>
        <p className="postCarousel__post--p">{postsObj[key]["text"]}</p>
        <a className="postCarousel__post--a" href="">
          {postButton}
        </a>
      </div>
    ) : (
      <div key={key} className="postCarousel__post">
        <h3 className="postCarousel__post--title">{postsObj[key]["title"]}</h3>
        <h5 className="postCarousel__post--tag">#{postsObj[key]["tags"][0]}</h5>
        <p className="postCarousel__post--p">{postsObj[key]["text"]}</p>
        <a className="postCarousel__post--a" href="">
          {postButton}
        </a>
      </div>
    )
  );

  return <div className="postCarousel">{postsView}</div>;
}

export default PostCarousel;
