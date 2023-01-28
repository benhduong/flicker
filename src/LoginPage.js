import React, { useEffect, useState } from "react";
import { signInWithGoogle } from "./Firebase.js";


function Login() {
  return (
    <div className="login">
      <div className="login__container">

        <button  onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
