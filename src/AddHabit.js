import logo from './logo.svg';
import './Habit.css';
import React, { useState } from 'react';

function AddHabit(props) {

  let text = props.text
  let setCurrHabits = props.setCurrHabits
  let currHabits = props.currHabits

  const [inputText, setInputText] = useState("")

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputText !== "") {
        setCurrHabits([...currHabits, inputText])
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
          }
        }}></img>
      </div>
    </div>
  );
}

export default AddHabit;
