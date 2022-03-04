import React, { useEffect, useState } from "react";
import "./Submit.css";
import Button from "react-bootstrap/Button";

export default function SubmitBtn(props) {
  return (
    <Button
      size="lg"
      type="submit"
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
