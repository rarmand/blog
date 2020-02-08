import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import AboutContainer from "../../components/AboutContainer";
import TitleTextContainer from "../../components/TitleTextContainer";

function Portfolio() {
  const introTitle = "Hello guys!";
  const introText = [
    "My name is Ola Holik and I want to present my author's website. I invite you to explore the webpage further, learn about my skills, my former projects and new ideas.",
    "It is not only a portfolio but also my personal collection of thoughts written in articles about valuable cases. I wish you find something interesting for yourselves."
  ];

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

export default Portfolio;
