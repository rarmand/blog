import React, { Component } from "react";
import "./styles.sass";
import PostCarousel from "../PostCarousel";

class PostContainer extends Component {
  render() {
    return (
      <sector className="postContainer">
        <article className="postContainer__article">
          <h2 className="postContainer__article--title">
            Title of the post - seems that it should be much longer than an
            usual one, just to test how it works
          </h2>
          <h5 className="postContainer__article--tag">#russian</h5>
          <p className="postContainer__article--p">
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today! Google
            Chrome is a web browser developed by Google, released in 2008.
            Chrome is the world's most popular web browser today! Google Chrome
            is a web browser developed by Google, released in 2008. Chrome is
            the world's most popular web browser today! Google Chrome is a web
            browser developed by Google, released in 2008. Chrome is the world's
            most popular web browser today! Google Chrome is a web browser
            developed by Google, released in 2008. Chrome is the world's most
            popular web browser today! Google Chrome is a web browser developed
            by Google, released in 2008. Chrome is the world's most popular web
            browser today! Google Chrome is a web browser developed by Google,
            released in 2008. Chrome is the world's most popular web browser
            today! Google Chrome is a web browser developed by Google, released
            in 2008. Chrome is the world's most popular web browser today!
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!
          </p>
        </article>
        <div className="postContainer__postCarousel">
          <PostCarousel />
        </div>
      </sector>
    );
  }
}

export default PostContainer;
