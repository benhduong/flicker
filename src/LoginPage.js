import React, { useEffect, useState } from "react";
import { signInWithGoogle } from "./Firebase.js";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Fire from "./components/Fire.js";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__container">
        <div className="title">Welcome to Flicker!</div>
        <button
          className="login-with-google-btn"
          onClick={() =>
            signInWithGoogle().then(() => {
              navigate("/homepage");
            })
          }
        >
          Login with Google
        </button>
      </div>
      <div className="campfire">
        <Fire />
      </div>
    </div>
  );
}

export default Login;
