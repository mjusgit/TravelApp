import React, { useState } from 'react';
import axios from 'axios';

export const SignUpForm = () => {
  const [userName, setUserName] = useState(''); // Add state for user name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        userName, // Include userName in the request payload
        email,
        password,
      });
      setMessage(response.data.message);
      setUserName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Register</h2>
      {message && <p>{message}</p>}
      {/* Add user name input */}
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
      />
      {/* Existing email input */}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
      />
      {/* Existing password input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
      />
      <button
        onClick={handleRegister}
        className="block w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-100 focus:outline-none"
      >
        Register
      </button>
    </div>
  );
};
