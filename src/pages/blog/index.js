import React from "react";
import "./styles.css";

function Blog() {

  return (
    <>
      <Header />
      <main>
        <TitleTextContainer title={introTitle} lines={introText} />
        <AboutContainer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Blog;
