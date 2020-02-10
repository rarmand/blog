import React from "react";
import "./styles.sass";

function PostBox(props) {
  return (
    <div className="postBox">
      <h3 className="postBox__title">Post title</h3>
      <h4 className="postBox__tag">Tag text</h4>
      <span className="postBox__text">
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      </span>
    </div>
  );
}

export default PostBox;
