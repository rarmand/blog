import React from "react";
import "./App.css";

// BEM
// SASS albo LESS
// algorithms in JS, animations
// CSS: positioning, Box Model, Flexbox, Grid, Custom Props
// media queries, mobile first, rem units
// API & REST

function App() {
  return (
    <div className="app_view">
      <header>
        <p>The inner space</p>
        <nav>
          <ul>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <p>Hello guys!</p>
          <p>
            My name is Ola Holik and I want to present my author's website. I
            invite you to explore the webpage further, learn about my skills, my
            former projects and new ideas.
          </p>
          <p>
            It is not only a portfolio but also my personal collection of
            thoughts written in articles about valuable cases. I wish you find
            something interesting for yourselves.
          </p>
        </div>
        <div>
          <div>
            <p>Aleksandra Holik</p>
            <p>Frontend Developer</p>
          </div>
          <div>
            <p>About me</p>
            <span>
              Profesjonalnie podchodząc do sprawy jestem programistką.
            </span>
            <span>
              Ukończyłam kierunek Informatyka Stosowana na wydziale Fizyki i
              Informatyki Stosowanej na Akademii Górniczo-Hutniczej w Krakowie.
              Mogę się pochwalić tytułami magistra inżyniera.
            </span>
            <span>
              Moją wiedzę i umiejętności rozwijam w technologiach powiązanych z
              Frontend oraz Mobile Development. Jestem w trakcie nauki UX Design
              oraz projektowania stron internetowych. Interesuję się również
              bezpieczeństwem w sieci oraz technologiami backendowymi.
            </span>
            <span>
              Moim gulty pleasure jest język Python, którego w niedługim czasie
              zacznę częściej stosować.
            </span>
          </div>
          <div>
            <ul>
              <li>
                <div>JavaScript</div>
              </li>
              <li>
                <div>ReactJS</div>
              </li>
              <li>
                <div>Flutter</div>
              </li>
              <li>
                <div>Dart</div>
              </li>
              <li>
                <div>HTML &amp; CSS</div>
              </li>
              <li>
                <div>Python</div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Contact me</p>
          <div>
            <p>Name and surname:</p>
            <input></input>
            <p>Email:</p>
            <input></input>
            <p>Text message:</p>
            <input></input>
            <button>Send</button>
          </div>
        </div>
      </main>
      <footer>
        <p>
          All rights reserved. &copy; Aleksandra Holik 2020 |
          holik.alek@gmail.com
        </p>
      </footer>
    </div>
  );
}

export default App;
