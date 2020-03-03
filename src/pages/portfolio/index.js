import React from "react";
import "../../app/styles.sass";
import Contact from "../../components/Contact";
import AboutContainer from "../../components/AboutContainer";
import WelcomeContainer from "../../components/WelcomeContainer";
import BlogContainer from "../../components/BlogContainer";

function Portfolio() {
  const introTitle = "Hello guys!";
  const introText = [
    "My name is Ola Holik and I want to present my author's website. I invite you to explore the webpage further, learn about my skills, my former projects and new ideas.",
    "It is not only a portfolio but also my personal collection of thoughts written in articles about valuable cases. I wish you find something interesting for yourselves."
  ];

  return (
    <main>
      <WelcomeContainer />
      <AboutContainer />
      <BlogContainer />
      <Contact />
    </main>
  );
}

export default Portfolio;
