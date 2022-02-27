import React, { useState, useEffect } from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import Title from "../title/Title";
import Input from "../inputs/input/Input";
import Submit from "../../buttons/submit/Submit";
import Container from "../container/Container";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(" Let's create your account");
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
    return name.length > 0 && email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    // aici ar trebui sa creezi o functie pentru a valida toate input-urile
    <div style={{ width: "100%" }}>
      <div className="title-form">
        <Title title={title} className="title-aut" />
      </div>
      <div className="auth-form">
        <Form onSubmit={handleSubmit}>
          <div className="auth-input">
            <Form.Group size="lg" controlId="input-name">
              {/* poate ar fi ok pentru tine sa creezi o functie la onChange */}
              <Input placeholder="Full Name" type="name" className="name" />
            </Form.Group>
          </div>
          <div className="auth-input">
            <Form.Group size="lg" controlId="input-email">
              <Input
                placeholder="Email adress"
                type="email"
                className="email"
              />
            </Form.Group>
          </div>
          <div className="auth-input">
            <Form.Group size="lg" controlId="input-password">
              <Input
                placeholder="Password"
                type="password"
                className="password"
              />
            </Form.Group>
          </div>
          <div className="acc-prg">
            <p className="prg">Already have an account?</p>
            <p>
              <a href="/login" className="login-r">
                Log in
              </a>
            </p>
          </div>
          <div className="btn-register-container">
            <Submit
              className="btn-register"
              text="Register"
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
