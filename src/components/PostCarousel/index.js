import React from "react";
import "./styles.sass";
import PostBox from "../PostBox";

function PostCarousel(props) {
  return (
    <div className="postCarousel">
      <PostBox />
      <PostBox main="main" />
      <PostBox />
    </div>
  );
}

export default PostCarousel;
