import React from "react";
import "./App.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutInfo from "../components/AboutInfo";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
// BEM
// SASS albo LESS
// algorithms in JS, animations
// CSS: positioning, Box Model, Flexbox, Grid, Custom Props
// media queries, mobile first, rem units
// API & REST

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Intro />
        <AboutInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
