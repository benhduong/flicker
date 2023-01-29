import logo from "./logo.svg";
import "./HomePage.css";
import React, { useState, useEffect} from "react";
import Nav from "./components/Nav.js";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import AddHabit from "./AddHabit";
import Habit from "./Habit";
import Fire from "./components/Fire.js";

import { collection, addDoc, getDocs, setDoc, doc} from "firebase/firestore";
import { db, auth } from "./Firebase.js";

const newAuth = getAuth();
let uid = "";
onAuthStateChanged(newAuth, (user) => {
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

  const [habitLevel, setHabitLevel] = useState(0)
  const [timeSinceLastLevelDrop, setTimeSinceLastLevelDrop] = useState(Date.now())
  const [timeDif, setTimeDif] = useState(6)

  const fetchLevel = async () => {
    await getDocs(collection(db, "levels")).then((querySnapshot) => {
      let newData = querySnapshot.docs;
      newData = newData
        .filter((doc) => doc.id === auth.currentUser.uid)
        .map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(newData[0]);
      if (newData[0] !== undefined && newData[0].habitLevel !== undefined && newData[0].timeSinceLastLevelDrop !== undefined) {
        setHabitLevel(newData[0].habitLevel)
        setTimeSinceLastLevelDrop(newData[0].timeSinceLastLevelDrop);
      }
    });
  }
  
    const editLevels = async (newHabit) => {
      try {
        console.log(auth.currentUser.uid);
          const docRef = await setDoc(doc(db, "levels", auth.currentUser.uid), {
            habitLevel: habitLevel,
            timeSinceLastLevelDrop: timeSinceLastLevelDrop
          });
          //console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          //console.error("Error adding document: ", e);
        }
    }

  const fetchPost = async () => {
    //  console.log(auth.currentUser.uid)
    // let data = db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
    // console.log(data)

    //let data = await getDocs(collection(db, "habits"))
    //.doc(auth.currentUser.uid)
    //console.log(data)

    await getDocs(collection(db, "habits")).then((querySnapshot) => {
      let newData = querySnapshot.docs;

      // for (let i in newData) {
      //   if (newData[i].doc.id === auth.currentUser.uid) {
      //     console.log(newData[i].doc.data())
      //   }
      // }

      newData = newData
        .filter((doc) => doc.id === auth.currentUser.uid)
        .map((doc) => ({ ...doc.data(), id: doc.id }));

      console.log(newData[0]);

      if (newData[0].habits !== undefined) {
        console.log(newData[0].habits);
        setCurrHabits(newData[0].habits);
      }
      //setTodos(newData);
      //console.log(todos, newData);
    });

    // await getDocs(collection(db, "habits").doc(auth.currentUser.uid))
    // .then((querySnapshot)=>{
    //     const newData = querySnapshot.docs
    //         .map((doc) => ({...doc.data(), id:doc.id }));
    //     console.log(newData)
    //     //setTodos(newData);
    //     //console.log(todos, newData);
    // })
  };

  useEffect(() => {
    fetchPost();
    fetchLevel().then(() => {
      let currTime = Date.now()
      let pastTime = timeSinceLastLevelDrop
      let timeDif = currTime - pastTime
      timeDif = timeDif * (1/1000) * (1/60) * (1/60)
      setTimeDif(timeDif)
      if (timeDif / 6 > 1) {
        console.log(timeDif)
        let newFireLevel = Math.max(0, habitLevel - Math.floor(timeDif / 6))
        setHabitLevel(newFireLevel)
        setTimeSinceLastLevelDrop(Date.now())
      }
      editLevels()
    })
  }, []);

  return (
    <div className="homepage">
      <Nav id={uid} />

      <h1>Flicker</h1>
      <p>Keep your fire strong by completing a habit in X hours</p>

      <div className="homepagePane">
        <AddHabit
          text={"Add New Habit"}
          currHabits={currHabits}
          setCurrHabits={setCurrHabits}
        />
        <div className="habits">
          {currHabits.map((habitText, i) => (
            <Habit text={habitText} currHabits={currHabits} setCurrHabits={setCurrHabits} editLevels={editLevels} key={i} />
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
