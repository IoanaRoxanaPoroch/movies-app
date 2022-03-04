import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import Title from "../title/Title";
import AuthInput from "../inputs/input/AuthInput";
import SubmitBtn from "../../buttons/submit/Submit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("input");
  const [title, setTitle] = useState("");
  const [users, setUsers] = useState([]);
  const [errorMessages, setErrorMessages] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    return await axios.get("http://localhost:3000/users");
  };
  useEffect(async () => {
    setTitle("Log in to your account");
    let response = await getData();
    if (response && response.data) {
      setUsers(response.data);
    }
  }, []);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function showHide(e) {
    setType(type === "input" ? "password" : "input");
  }

  function handleClick() {
    if (email.length > 0 && password.length > 0) {
      const userExists = users.find((user) => user.email === email);
      if (!userExists) {
        setErrorMessages("Email is incorrect!");
        return;
      }

      if (userExists) {
        const verifyPassword = userExists.password === password;
        if (!verifyPassword) {
          setErrorMessages("Password is incorrect!");
          return;
        } else {
          sessionStorage.setItem("user", JSON.stringify(userExists));
          if (userExists.role === "admin") {
            navigate("/moviesadmin");
          } else {
            navigate("/");
            window.location.reload();
          }
        }
      }
    } else {
      setErrorMessages("Invalid user!");
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <div className="title-form-login">
        <Title title={title} className="title-aut" />
      </div>
      <div className="auth-form-login">
        <Form onSubmit={handleSubmit}>
          <div className="auth-input-login">
            <Form.Group size="lg" controlId="input-email">
              <AuthInput
                placeholder="Email adress"
                type="email"
                className="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="auth-input-login">
            <input
              placeholder="Password"
              type={type}
              className="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={showHide}
              className={
                "login-icon fa-solid far " +
                (type === "input" ? "fa-eye" : "fa-eye-slash")
              }
              id="togglePassword"
            ></i>
          </div>
          <div>
            <p className="pull-left error-msg-container">{errorMessages}</p>
            <p className="pull-right forgot-text">
              <a href="/reset"> Forgot password?</a>
            </p>
          </div>
          <div className="btn-login-container">
            <SubmitBtn
              className="btn-login"
              text="Log in"
              disabled={!validateForm()}
              onClick={handleClick}
            />
          </div>
          <div className="prg-container">
            <p>Don’t have an account? </p>
            <p>
              <a href="/register">Let’s create one</a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
