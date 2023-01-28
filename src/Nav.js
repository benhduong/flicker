import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

function Nav(props) {
  const navigate = useNavigate();

  function signOut(auth) {
    navigate("/");
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Navbar with text</Navbar.Brand>
        <Navbar.Text className="justify-content-end">
          Signed in as: {props.id}
        </Navbar.Text>
        <Navbar.Text><button onClick={signOut}>Sign Out</button></Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Nav;
