import React from "react";
import "../../app/styles.sass";
import "./styles.sass";
import PostBox from "../../components/PostBox";

function Blog() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<PostBox />);
  }

  return (
    <main>
      <section className="blog">
        <span className="blog__text">Lupa gdzieś po prawej</span>
        <span className="blog__text">Rozwijalna lista tagów</span>
        <span className="blog__text">Wyszukiwanie po datach</span>
        <span className="blog__text">
          Wyszukiwanie by się tutaj przydało, a przynajmnniej jakiś box
        </span>

        <h2 className="blog__title">Uszanowanko w blogosferze!</h2>
        <p className="blog__text">
          Sprawdź listę ostatnich postów na blogu lub znajdź coś dla siebie za
          pomocą tagów lub wyszukiwarki.
        </p>
        <p className="blog__text">Życzę przyjemnego czytania! :)</p>
        <div className="blog__posts">{arr}</div>
      </section>
    </main>
  );
}

export default Blog;
