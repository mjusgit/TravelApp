import React, { useState } from 'react';
import axios from 'axios';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Perform the POST request to the server to log in the user
      const response = await axios.post('http://localhost:5000/login', { email: email, password: password });
      setMessage(response.data.message);

      // Clear the input fields
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle errors
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="max-w-xs mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-red-600">Login</h2>
    {message && <p>{message}</p>}
    <input
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
    />
    <button
      onClick={handleLogin}
      className="block w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-100 focus:outline-none"
    >
      Login
    </button>
  </div>
  
  );
};

