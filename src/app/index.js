import React from "react";
import "./styles.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutInfo from "../components/AboutInfo";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import AboutContainer from "../components/AboutContainer";
// BEM
// SASS albo LESS
// algorithms in JS, animations
// CSS: positioning, Box Model, Flexbox, Grid, Custom Props
// media queries, mobile first, rem units
// API & REST

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <AboutContainer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
