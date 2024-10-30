import { useState } from 'react';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import './App.css';

function App() {
  // Set initial page to "Login"
  const [page, setPage] = useState("Login");

  // Define functions to update the page state, simulating navigation
  const goToLogin = () => setPage("Login");
  const goToHomePage = () => setPage("HomePage");
  const goToSignUp = () => setPage("SignUp");

  return (
    <div className="App">
      {page === "Login" && <Login goToHomePage={goToHomePage} goToSignUp={goToSignUp} />}
      {page === "HomePage" && <HomePage goToLogin={goToLogin} />}
      {page === "SignUp" && <SignUp goToHomePage={goToHomePage} />}
    </div>
  );
}
export default App;
