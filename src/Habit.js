import logo from './logo.svg';
import './Habit.css';
import { collection, addDoc, getDocs, setDoc, doc} from "firebase/firestore";
import { db, auth} from "./Firebase.js"

function Habit(props) {

  let text = props.text
  let currHabits = props.currHabits
  let setCurrHabits = props.setCurrHabits

  const removeTodo = async (oldHabit) => {

    // await setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
   
    try {
      console.log(auth.currentUser.uid);
      let removedCopy = currHabits.filter((h) => h !== oldHabit)
        const docRef = await setDoc(doc(db, "habits", auth.currentUser.uid), {
          habits: removedCopy,    
        });
        setCurrHabits(removedCopy)
        console.log("Removed the habit ", oldHabit)
        //console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        //console.error("Error adding document: ", e);
      }
  }

  return (
    <div className="habit">
      <button onClick={() => removeTodo(text)}>{text}</button>
    </div>
  );
}

export default Habit;
