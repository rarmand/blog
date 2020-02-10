import React from "react";
import "../../app/styles.sass";
import "./styles.sass";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import PostBox from "../../components/PostBox";

function Blog() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<PostBox />);
  }

  return (
    <>
      <Menu />
      <main>
        <div className="blogContainer">
          <p className="blogContainer__title">So, welcome on my blog!</p>
          <p className="blogContainer__text">
            Check out the list of last posts or find interesting subject in
            search box.
          </p>
          <p>Wyszukiwanie by się tutaj przydało, a przynajmnniej jakiś box</p>
          <span>Rozwijalna lista tagów</span>
          <span>Wyszukiwanie po datach</span>
          {arr}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
