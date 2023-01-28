import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import './Nav.css';

function Nav(props) {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <Navbar>
      <Navbar.Text>
        Signed in as: {props.id}
      </Navbar.Text>
      <button className="signout"
        onClick={() => {
          auth.signOut().then(() => navigate("/"));
        }}
      >
        Sign Out
      </button>
    </Navbar>
  );
}

export default Nav;
