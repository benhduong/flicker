import logo from './logo.svg';
import './HomePage.css';
import React, { useState } from 'react';
import Nav from './Nav.js';

import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import AddHabit from './AddHabit';
import Habit from './Habit'

const auth = getAuth();
let uid = '';
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.displayName;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// const auth = getAuth();
// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

function HomePage() {

  const [currHabits, setCurrHabits] = useState(["Test Habit", "Another Habit"])

  return (
    <div className="homepage">
      <Nav id={uid}/>

      <h1>Flicker</h1>

      <div className="homepagePane">
        <AddHabit text={"Add New Habit"} currHabits={currHabits} setCurrHabits={setCurrHabits}/>
        <div className="habits">
          {currHabits.map((habitText, i) => <Habit text={habitText} key={i}/>)}
        </div>
      </div>
      <div className="fix">CampFire Div
      
      </div>
    </div>
  );
}

export default HomePage;
