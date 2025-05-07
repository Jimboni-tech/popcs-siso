import './App.css';
import Header from './Components/Header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Pages/SignIn.js';
import Home from './Pages/Landing.js';
import { useAuth0 } from '@auth0/auth0-react';
import SignOut from './Pages/SignOut.js';
import Admin from './Pages/Admin.js'




function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '24px'
    }}>Loading Auth0...</div>;
  }

  if (error) {
    return <div style={{
      padding: '20px',
      color: 'red'
    }}>Authentication Error: {error.message}</div>;
  }

  console.log('Auth Status:', { isAuthenticated });
  return (
    <div>
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path = "/home" element = {<Home />} />
            <Route path = "/signout" element = {<SignOut />} />
            <Route path = "/admin" element = {<Admin />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
