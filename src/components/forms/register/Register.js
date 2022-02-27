import React, { useState, useEffect } from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import Title from "../title/Title";
import AuthInput from "../inputs/input/Input";
import SubmitBtn from "../../buttons/submit/Submit";

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

  function validateForm() {
    return name.length > 0 && email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div style={{ width: "100%" }}>
      <div className="title-form-register">
        <Title title={title} className="title-aut" />
      </div>
      <div className="auth-form-register">
        <Form onSubmit={handleSubmit}>
          <div className="auth-input-register">
            <Form.Group size="lg" controlId="input-name">
              <AuthInput placeholder="Full Name" type="name" className="name" />
            </Form.Group>
          </div>
          <div className="auth-input-register">
            <Form.Group size="lg" controlId="input-email">
              <AuthInput
                placeholder="Email adress"
                type="email"
                className="email"
              />
            </Form.Group>
          </div>
          <div className="auth-input-register">
            <Form.Group size="lg" controlId="input-password">
              <AuthInput
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
            <SubmitBtn
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
