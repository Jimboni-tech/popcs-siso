
import './App.css';
import Header from './Components/Header.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Pages/SignIn.js'
function App() {
  return (
    <div>
      <Header />
      <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
