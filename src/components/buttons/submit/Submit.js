import React, { useEffect, useState } from "react";
import "./Submit.css";
import Button from "react-bootstrap/Button";

export default function SubmitBtn(props) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (props.name && props.email && props.password) {
  //     setName(props.name);
  //     setEmail(props.email);
  //     setPassword(props.password);
  //   }
  // });

  // function validateForm() {
  //   // ce se intampla daca nu exista email sau password?
  //   return name.length > 0 && email.length > 0 && password.length > 0;
  // }
  return (
    <Button
      size="lg"
      type="submit"
      // disabled={!validateForm()}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
