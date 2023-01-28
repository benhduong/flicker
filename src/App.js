import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}>
              <Route path="homepage" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
