import logo from './logo.svg';
import './Habit.css';

function AddHabit(props) {

  let text = props.text

  return (
    <div className="addHabit">
      <div className="button-27 addHabitLine">
        <input type="text" placeholder='New Habit' className='habitInput'></input>
        <img className="plusIcon" src={"/plus.svg"}></img>
      </div>
    </div>
  );
}

export default AddHabit;
