import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
          <Routes>
              <Route  path="/register" element={<Register />} />
              <Route  path="/login" element={<Login />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
