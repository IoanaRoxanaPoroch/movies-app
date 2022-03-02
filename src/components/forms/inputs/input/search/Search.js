import React, { useState } from "react";
import "./Search.css";
import Form from "react-bootstrap/Form";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Searchfield(props) {
  const [value, setValue] = useState("");

  return (
    <div className="box">
      <Form.Group size="lg" controlId={props.type}>
        <Form.Control
          type={props.type}
          name={props.type}
          className={props.className}
          placeholder={props.placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        <i className="fa fa-search search-icon"></i>
      </Form.Group>
    </div>
  );
}
