import React, { useState } from "react";
import "./Input.css";
import Form from "react-bootstrap/Form";

export default function AuthInput(props) {



  return (
    <Form.Group size="lg" controlId={props.type}>
      <Form.Control
        type={props.type}
        name={props.type}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Form.Group>
  );
}
