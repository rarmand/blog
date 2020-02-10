import React from "react";
import "./styles.sass";

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
      <label for={key} className="contactContainer__inputContainer--label">
        {dataObj[key]}:
      </label>
      <input
        type="input"
        id={key}
        name={key}
        className="contactContainer__inputContainer--input"
      ></input>
    </div>
  ));

  return (
    <div className="contactContainer">
      <p className="contactContainer__title">{title}</p>
      <div className="contactContainer__dataContainer">
        <form className="contactContainer__dataContainer--form">
          {dataView}
          <button
            type="submit"
            className="contactContainer__dataContainer--button"
          >
            {buttonInfo}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
