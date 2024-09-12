import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Profile from './components/Auth/Profile';
import FileUpload from './components/DataIngestion/FileUpload';
import Visualization from './components/Visualization/Visualization';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/visualization" element={<Visualization />} />
      </Routes>
    </Router>
  );
}

export default App;
