import logo from './logo.svg';
import './App.css';

function AddHabit(props) {

  let text = props.text

  return (
    <div className="addhabit">
      {text}
    </div>
  );
}

export default AddHabit;
