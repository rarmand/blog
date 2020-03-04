import React from "react";
import "./styles.sass";

function Contact(props) {
  const title = "Contact";
  const buttonInfo = "Send";
  const dataObj = {
    name: "Name",
    surname: "Surname",
    email: "Email",
    message: "Text message"
  };

  const dataView = Object.keys(dataObj).map(key =>
    key !== "message" ? (
      <div className="contactContainer__inputContainer">
        <input
          type="input"
          id={key}
          name={key}
          className="contactContainer__inputContainer--input"
          placeholder={dataObj[key]}
        ></input>
      </div>
    ) : (
      <div className="contactContainer__inputContainer">
        <textarea
          type="input"
          id={key}
          name={key}
          className="contactContainer__inputContainer--input"
          placeholder={dataObj[key]}
        ></textarea>
      </div>
    )
  );

  return (
    <section id="contact" className="contactContainer">
      <div className="contactContainer__title">
        <p className="contactContainer__title--p">{title}</p>
      </div>
      <div className="contactContainer__dataContainer">
        <div className="contactContainer__dataContainer--bg"></div>
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
    </section>
  );
}

export default Contact;
