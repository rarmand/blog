import React from "react";
import "./styles.sass";

function PostCarousel(props) {
  const postsObj = {
    post1: {
      title: "To jest tytuł pierwszego postu na moim blogu",
      text:
        "Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi. Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi"
    },
    post2: {
      title: "To jest tytuł pierwszego postu na moim blogu",
      text:
        "Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi. Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi"
    },
    post3: {
      title: "To jest tytuł pierwszego postu na moim blogu",
      text:
        "Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi. Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi"
    }
  };

  const postsView = Object.keys(postsObj).map(key => (
    <div key={key} className="postCarousel__post">
      <h3 className="postCarousel__post--title">{postsObj[key]["title"]}</h3>
      <p className="postCarousel__post--p">{postsObj[key]["text"]}</p>
    </div>
  ));

  return <div className="postCarousel">{postsView}</div>;
}

export default PostCarousel;
