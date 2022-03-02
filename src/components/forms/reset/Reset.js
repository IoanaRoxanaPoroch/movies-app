import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Title from "../title/Title";
import AuthInput from "../inputs/input/AuthInput";
import SubmitBtn from "../../buttons/submit/Submit";
import "./Reset.css";

// cred ca poti folosi es6 pentru functii
export default function Reset() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("Reset password");
  });

  // ar trebui sa creezi o functie de validare a inputurilor
  // indiciu: functia va avea 2 parametri
  // primul parametru: 'e.target.value'
  //al doilea parametru: el va reprezenta campul la care vei valida si este de tip string. De exemplu "email".
  // validateInputs(e.target.value, "email")
  // in acesta situatie vei putea crea o functie mai dinamica

  // cred ca numele acestei functie ar trebui sa fie "validateButton"
  function validateForm() {
    // ce se intampla daca nu exista email sau password?
    if (email.length) {
      return email.length;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    // aici ar trebui sa creezi o functie pentru a valida toate input-urile
    <div style={{ width: "100%" }}>
      <div className="title-form-reset">
        <Title title={title} className="title-aut" />
      </div>
      <div className="reset-prg-container">
        <p>
          We will send you over email the instructions in order to get your
          password reseted.
        </p>
      </div>
      <div className="auth-form-reset">
        <Form onSubmit={handleSubmit}>
          <div className="auth-input-reset">
            <Form.Group size="lg" controlId="input-email">
              <AuthInput
                placeholder="Email adress"
                type="email"
                className="email"
              />
            </Form.Group>
          </div>
          <div className="btn-reset-container">
            <SubmitBtn
              className="btn-reset"
              text="Reset password"
              name="test"
              email="test"
              password="test"
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
