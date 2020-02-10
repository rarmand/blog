import React from "react";
import "./styles.sass";

function TechList(props) {
  const techList = props.technologies;
  const techView = Object.keys(techList).map(key => (
    <li className="techListContainer__list--element" key={key}>
      <div className="techListContainer__list--div">
        <img
          className="techListContainer__list--img"
          src={"/assets/" + techList[key]["icon"]}
          alt=""
        />
        <p className="techListContainer__list--title">
          {techList[key]["name"]}
        </p>
      </div>
    </li>
  ));

  return (
    <div className="techListContainer">
      <ul className="techListContainer__list">{techView}</ul>
    </div>
  );
}

export default TechList;
