import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="AuthPageContainer">
        <div className="introduction-paragraphs">
          <p>
            Welcome to <span className="front-logo">kinnectMe</span> : a place
            of connection through kinship.
          </p>
          <p>
            Please sign up or login below to start kinnecting with events that
            resonate with you.
          </p>
        </div>
        <div className="auth-form-page-container">
          {showLogin ? (
            <LoginForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </div>
        <p>Or</p>
        <div className="changing-sign-in-button">
          <h3 onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? "SIGN UP" : "LOG IN"}
          </h3>
        </div>
      </div>
    </>
  );
}
