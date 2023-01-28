import logo from './logo.svg';
import './HomePage.css';

import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import AddHabit from './AddHabit';

const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

function HomePage() {

  currHabits = ["Test Habit", "Another Habit"]

  return (
    <div className="homepage">

      <AddHabit text="Add New Habit"/>
      <div className="habits">
        currHabits.map((i, habitText), <Habit text={habitText} key={i}/>)
      </div>
      <div className="campfire">CampFire Div</div>
    </div>
  );
}

export default HomePage;
