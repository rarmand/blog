import React from "react";

function TechList(props) {
  const techList = props.technologies;
  const techView = Object.keys(techList).map((key, index) => (
    <li key={key}>
      <div>{techList[key]}</div>
    </li>
  ));

  return (
    <div>
      <ul>{techView}</ul>
    </div>
  );
}

export default TechList;
