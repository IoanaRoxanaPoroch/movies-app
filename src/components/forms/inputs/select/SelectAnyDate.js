import React, { useState } from "react";
import "./SelectAnyDate.css";
import Form from "react-bootstrap/Form";

export default function SelectAnyDate(props) {
  const [value, setValue] = useState("");


  return (
    <Form.Select size="lg" className="select-form-date">
      <option value="1">Any Date</option>
      <option value="2">Last month</option>
      <option value="3">Last week</option>
      <option value="4">Today</option>
    </Form.Select>
  );
}
