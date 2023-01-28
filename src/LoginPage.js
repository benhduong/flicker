import React, { useEffect, useState } from "react";
import { signInWithGoogle } from "./Firebase.js";
import './LoginPage.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <button onClick={signInWithGoogle}>
          Login with Google
        </button>

        <Link to="/homepage"><button>Test</button></Link>
      </div>
    </div>
  );
}

export default Login;
