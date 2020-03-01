import React from "react";
import "./styles.sass";
import Portfolio from "../pages/portfolio";
import Header from "../components/Header";
import Blog from "../pages/blog";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// BrowserRouter - glowny komponent, gdzie cala def routingu, predefiniowana tu historia przeglądarki lub mozna w lib samemu zdefiniować historie
// Route - definicja poszczegolnych sciezek i powiazanie ich z komponentami
// Link - do przełączania się między ścieżkami routingu, przeładowanie strony i obsługa zdarzeń onClick

// BEM
// SASS albo LESS
// algorithms in JS, animations
// CSS: positioning, Box Model, Flexbox, Grid, Custom Props
// media queries, mobile first, rem units
// API & REST

// exact wymusza dokladne porownanie scieżek "/" === "/"
// App jako placeholder na obecnie wyswietlane componenty
function App() {
  return (
    <Router>
      <div className="routerContainer">
        <Header />
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/contact" />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
