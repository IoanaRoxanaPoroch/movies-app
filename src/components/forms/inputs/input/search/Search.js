import React, { useState } from "react";
import "./Search.css";
import Form from "react-bootstrap/Form";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Search(props) {
  const [value, setValue] = useState("");

  return (
    <div className="box">
      <Form.Group size="lg" controlId={props.type}>
        <Form.Control
          type={props.type}
          name={props.type}
          className="search"
          placeholder={props.placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        <i className="fa fa-search"></i>
      </Form.Group>
    </div>
  );
}
