import logo from './logo.svg';
import './Habit.css';
import React, { useState, useEffect} from 'react';
import { collection, addDoc, getDocs, setDoc, doc} from "firebase/firestore";
import { db, auth} from "./Firebase.js"

function AddHabit(props) {
  let text = props.text;
  let setCurrHabits = props.setCurrHabits;
  let currHabits = props.currHabits;

  const [inputText, setInputText] = useState("");

  const addTodo = async (newHabit) => {

    // await setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
   
    try {
      console.log(auth.currentUser.uid);
        const docRef = await setDoc(doc(db, "habits", auth.currentUser.uid), {
          habits: [...currHabits,newHabit],    
        });
        //console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        //console.error("Error adding document: ", e);
      }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputText !== "") {
        setCurrHabits([...currHabits, inputText])
        addTodo(inputText)
      }
    }
  };


  return (
    <div className="addHabit">
      <div className="button-27 addHabitLine">
        <input type="text" placeholder='New Habit' className='habitInput' onChange={(e) => {
          setInputText(e.target.value)
        }} onKeyDown={handleKeyDown}></input>
        <img className="plusIcon" src={"/plus.svg"} onClick={() => {
          if (inputText !== "") {
            setCurrHabits([...currHabits, inputText])
            addTodo(inputText)
          }
        }}></img>
      </div>
    </div>
  );
}

export default AddHabit;
