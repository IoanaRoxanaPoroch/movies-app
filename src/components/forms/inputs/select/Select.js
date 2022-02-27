import React, { useState } from "react";
import "./Select.css";
import Form from "react-bootstrap/Form";

export default function Select(props) {
  const [value, setValue] = useState("");
  console.log(props);

  return (
    <Form.Select size="lg" className="select-form">
      <option>Latest Added</option>
      <option value="1">Action</option>
      <option value="2">Comedy</option>
      <option value="3">Mystery</option>
    </Form.Select>
  );
}
