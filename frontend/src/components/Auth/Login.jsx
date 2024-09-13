import React, { useState } from 'react';
import API from '../../api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('') // Use string instead of object for state
  const [password, setPassword] = useState('') // Use string instead of object for state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { username, password }; // Create formData object with username and password
    try {
      const response = await API.post('/users/login/', formData); // Make API request to login endpoint
      localStorage.setItem('token', response.data.token); // Save token in local storage
      alert('Login successful!');
      navigate('/profile'); // Redirect to profile page on successful login
    } catch (error) {
      console.error(error);
      alert('Invalid credentials'); // Display error if login fails
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text" // text type
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state required
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
    </div>
  );
};

export default Login;
