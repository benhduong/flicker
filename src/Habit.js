import logo from './logo.svg';
import './Habit.css';

function Habit(props) {

  let text = props.text

  return (
    <div className="habit">
      <button onClick={}>{text}</button>
    </div>
  );
}

export default Habit;
