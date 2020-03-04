import React from "react";
import "./styles.sass";

function PostBox(props) {
  const post = {
    title:
      "To jest tytuł pierwszego postu na moim blogu, To jest tytuł pierwszego",
    tags: ["english", "programming"],
    text:
      "Taki tekst do dodania, Taki tekst do dodania, Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi. Taki tekst do dodania, co by potestować działanie i rozkład tekstu. Ważną rzeczą sprawdzić ułożenie jakichś obrazków dodanych do tekstu, albo jak to ustawiać za pomocą backendowych narzędzi"
  };
  const postButton = "Czytaj więcej";
  const boxClassName = props.main === "main" ? "postBox mainBox" : "postBox";

  return (
    <div className={boxClassName}>
      <h3 className="postBox__title">{post["title"]}</h3>
      <h5 className="postBox__tag">#{post["tags"][0]}</h5>
      <p className="postBox__text">{post["text"]}</p>
      <a className="postBox__a" href="/post">
        {postButton}
      </a>
    </div>
  );
}

export default PostBox;
