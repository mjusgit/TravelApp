import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/actions/authAction';
import { useNavigate } from 'react-router-dom';



export const LogInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email: email, password: password });
      setMessage(response.data.message);

      dispatch(loginSuccess(response.data.user));
      setEmail('');
      setPassword('');
      navigate('/account');

      localStorage.setItem('userToken', response.data.token);
    } catch (error) {
      
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
          <div>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>
    <button
      onClick={handleLogin}
      className="block w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-100 focus:outline-none"
    >
      Login
    </button>
  </div>
  
  );
};

