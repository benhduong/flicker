import React, { useEffect, useState } from "react";
import { signInWithGoogle } from "./Firebase.js";
import { Link } from "react-router-dom";
import './LoginPage.css';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="title">Welcome to Campfire!</div>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
      <Link to="/homepage">
        <button>Homepage</button>
      </Link>
    </div>
  );
}

export default Login;
