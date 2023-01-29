import './Habit.css';
import { setDoc, doc} from "firebase/firestore";
import { db, auth} from "./Firebase.js"

function Habit(props) {

  let text = props.text
  let currHabits = props.currHabits
  let setCurrHabits = props.setCurrHabits
  let editLevels = props.editLevels
  let habitLevel = props.habitLevel
  let setHabitLevel = props.setHabitLevel

  const removeTodo = async (oldHabit) => {
   
    try {
      console.log(auth.currentUser.uid);
      let removedCopy = currHabits.filter((h) => h !== oldHabit)
        await setDoc(doc(db, "habits", auth.currentUser.uid), {
          habits: removedCopy,    
        });
        setCurrHabits(removedCopy)
        console.log("Removed the habit", oldHabit)

        setHabitLevel(habitLevel + 1)
        editLevels().then(() => {console.log("edited habit level")});
        //console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  return (
    <div className="habit">
      <button onClick={() => removeTodo(text)}>{text}</button>
    </div>
  );
}

export default Habit;
