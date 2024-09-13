import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Feature from './components/Pages/Feature';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/features" element={<Feature />} />
      </Routes>
    </Router>
  );
}

export default App;
