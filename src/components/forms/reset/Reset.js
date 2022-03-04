import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Title from "../title/Title";
import AuthInput from "../inputs/input/AuthInput";
import SubmitBtn from "../../buttons/submit/Submit";
import "./Reset.css";
import { RiCloseLine } from "react-icons/ri";

const PopUp = ({ setIsOpen }) => {
  const [close, setClose] = useState(false);
  console.log("setIsOpen", typeof setIsOpen);
  return (
    <div className="pop-up-wrapper">
      <div className="pop-up-content">
        <div onClick={() => setIsOpen(false)} />
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        <div className="text-pop-up">
          <p>Verify your email adress for the reset link</p>
        </div>
      </div>
    </div>
  );
};

export default function Reset() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTitle("Reset password");
  });

  function validateForm() {
    return email.length > 0;
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div className="btn-reset-container">
            <SubmitBtn
              className="btn-reset"
              text="Reset password"
              name="reset"
              disabled={!validateForm()}
              onClick={() => {
                setIsOpen(true);
              }}
            />
            {isOpen && <PopUp setIsOpen={setIsOpen} />}
          </div>
        </Form>
      </div>
    </div>
  );
}
