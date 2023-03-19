import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
     // Email validation
  // if (!email) {
  //   setError('Please enter your Email Address.');
  //   return;
  // }
  
  // // Password validation
  // if (!password) {
  //   setError('Please enter your Password.');
  //   return;
  // }

  // // All fields are filled, continue with login logic
  // handleLogin();
  //   // Handle login logic
  };


  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth', {
        Email: email,
        Password: password,
      });
      console.log(response.data.msg);
      setAuthenticated(true);
    } catch (error) {
      console.log(error.response.data.msg);
      setError('Your Email Address or password is incorrect!');

     
    }
  };

  if (authenticated) {
    navigate('/Homepage');
  }
 

  
  return (
    <>
    <div className="login-container">
         <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input  type='email'

        placeholder='Enter your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}  />

        <label >Password</label>
        <input  type='password'
        
        placeholder='Enter your Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
      />
        
       
        {error && <p className="error">{error}</p>}
        </form>
        <button classname='submit' type="submit" onClick={handleLogin}>LOG IN</button>
      
       
      
    </div>
  
    <span className="headlogin">Log In</span>
    </>
  );
}


