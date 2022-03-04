import React, { useState, useEffect } from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import Title from "../title/Title";
import AuthInput from "../inputs/input/AuthInput";
import SubmitBtn from "../../buttons/submit/Submit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [existingUsers, setExistingUsers] = useState([]);
  const navigate = useNavigate();

  const validate = () => {
    if (!name) return true;
    if (!email) return true;
    if (!password) return true;

    return false;
  };

  const getData = async () => {
    return await axios.get("http://localhost:3000/users");
  };
  useEffect(async () => {
    setTitle("Let's create your account");
    let response = await getData();
    if (response && response.data) {
      setExistingUsers(response.data);
    }
  }, []);

  function validateForm() {
    return name.length > 0 && email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) return;
  }

  async function handleClick() {
    let user = {};
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      user = { name, email, password };
      user.role = "user";
      axios.post("http://localhost:3000/users", user);
      let response = await getData();
      if (response && response.data) {
        setExistingUsers(response.data);
      }
      navigate("/login");
      window.location.reload();
    }
    console.log("user", user);
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
              <AuthInput
                placeholder="Full Name"
                type="name"
                className="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                validate={(val) => (val ? false : "Name Required")}
              />
            </Form.Group>
          </div>
          <div className="auth-input-register">
            <Form.Group size="lg" controlId="input-email">
              <AuthInput
                placeholder="Email adress"
                type="email"
                className="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                validate={(val) => (val ? false : "Email Required")}
              />
            </Form.Group>
          </div>
          <div className="auth-input-register">
            <Form.Group size="lg" controlId="input-password">
              <AuthInput
                placeholder="Password"
                type="password"
                className="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                validate={(val) => (val ? false : "Password Required")}
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
              disabled={validate}
              onClick={handleClick}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
