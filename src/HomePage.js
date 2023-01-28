import logo from './logo.svg';
import './HomePage.css';
import React, { useState, useEffect} from 'react';
import Nav from './Nav.js';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import AddHabit from "./AddHabit";
import Habit from "./Habit";
import Fire from "./Fire.js";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, auth } from "./Firebase.js"

const newAuth = getAuth();
let uid = '';
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

  const fetchPost = async () => {
      //  console.log(auth.currentUser.uid)
      // let data = db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
      // console.log(data)

      //let data = await getDocs(collection(db, "habits"))
      //.doc(auth.currentUser.uid)
      //console.log(data)

    await getDocs(collection(db, "habits"))
        .then((querySnapshot)=>{              
            let newData = querySnapshot.docs

            // for (let i in newData) {
            //   if (newData[i].doc.id === auth.currentUser.uid) {
            //     console.log(newData[i].doc.data())
            //   }
            // }

            newData = newData.filter((doc) => doc.id === auth.currentUser.uid)
               .map((doc) => ({...doc.data(), id:doc.id }));

            console.log(newData[0])

            if (newData[0].habits !== undefined) {
              console.log(newData[0].habits)
              setCurrHabits(newData[0].habits)
            }  
            //setTodos(newData);                
            //console.log(todos, newData);
        })

        // await getDocs(collection(db, "habits").doc(auth.currentUser.uid))
        // .then((querySnapshot)=>{              
        //     const newData = querySnapshot.docs
        //         .map((doc) => ({...doc.data(), id:doc.id }));
        //     console.log(newData)
        //     //setTodos(newData);                
        //     //console.log(todos, newData);
        // })
  }

    useEffect(()=>{
      fetchPost();
  }, [])

  return (
    <div className="homepage">
      <Nav id={uid}/>

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
      <div className="fix">
        <Fire />
      </div>
    </div>
  );
}

export default HomePage;
