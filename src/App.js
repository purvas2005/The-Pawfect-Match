import { useState } from 'react';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import SideBar from './Components/SideBar';
import Tab from './Components/HeadBar';
import './App.css';

function App() {
  const [page, setPage] = useState("Login");
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

