import React from "react";
import LogoRL from "../logorl/LogoRL";
import "./Container.css";

export default function Container(props) {
  return (
    // <>
    //   <div className="top-container"></div>
    //   <div className={props.className}></div>
    // </>
    <div className="auth-form-container">
      <div className="auth-content-wrapper">
        <div className="logo-form">
          <LogoRL />
        </div>
        <div className="content-form">
          <div className="top-container" />
          <div className="form-container">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
