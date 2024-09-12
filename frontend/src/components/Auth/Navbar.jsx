import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/upload">Upload File</Link>
      <Link to="/visualization">Visualizations</Link>
    </nav>
  );
};

export default Navbar;
