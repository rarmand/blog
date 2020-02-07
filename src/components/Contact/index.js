import React from "react";
import "./styles.css";

function Contact(props) {
  const title = "Contact me";
  const buttonInfo = "Send";
  const dataObj = {
    name: "Name",
    surname: "Surname",
    email: "Email",
    message: "Text message"
  };

  const dataView = Object.keys(dataObj).map(key => (
    <div className="contactContainer__inputContainer">
      <p className="contactContainer__inputContainer--p">{dataObj[key]}:</p>
      <input className="contactContainer__inputContainer--input"></input>
    </div>
  ));

  return (
    <div className="contactContainer">
      <p className="contactContainer__title">{title}</p>
      <div className="contactContainer__dataContainer">
        {dataView}
        <button className="contactContainer__dataContainer--button">
          {buttonInfo}
        </button>
      </div>
    </div>
  );
}

export default Contact;
