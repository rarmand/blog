import React from "react";
import "./styles.css";

function Footer(props) {
  const text = "Aleksandra Holik 2020";
  return (
    <footer className="footer">
      <p className="footer__p">All rights reserved. &copy; {text}</p>
    </footer>
  );
}

export default Footer;
