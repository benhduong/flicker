import logo from "./logo.svg";
import "./HomePage.css";
import React, { useState } from "react";
import Nav from "./components/Nav.js";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import AddHabit from "./AddHabit";
import Habit from "./Habit";
import Fire from "./components/Fire.js";

const auth = getAuth();
let uid = "";
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

function HomePage() {
  const [currHabits, setCurrHabits] = useState(["Test Habit", "Another Habit"]);

  return (
    <div className="homepage">
      <Nav id={uid} />

      <h1>Flicker</h1>

      <div className="homepagePane">
        <AddHabit
          text={"Add New Habit"}
          currHabits={currHabits}
          setCurrHabits={setCurrHabits}
        />
        <div className="habits">
          {currHabits.map((habitText, i) => (
            <Habit text={habitText} key={i} />
          ))}
        </div>
      </div>
      <div className="campfire">
        <Fire />
      </div>
    </div>
  );
}

export default HomePage;
