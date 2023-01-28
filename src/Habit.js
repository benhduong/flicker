import logo from './logo.svg';
import './App.css';

function Habit(props) {

  let text = props.text

  return (
    <div className="habit">
      {text}
    </div>
  );
}

export default Habit;
