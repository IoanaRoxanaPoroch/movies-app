import React from "react";
import "./Title.css";

function Title(props) {
  return <p className={props.className}>{props.title}</p>;
}
export default Title;
