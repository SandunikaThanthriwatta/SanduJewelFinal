import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom'

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    User_Name: '',
    NIC_No: '',
    Email: '',
    Password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitted:', formData);
    try {
      const response = await fetch('http://localhost:8000/Registrations', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);
      navigate('/Loginpage');

    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="form">
        <span className="user_name">User Name</span>
        <input className='uname_input' name="User_Name" onChange={handleInputChange} type='text' placeholder='Enter your name'  required></input>

        <span className="user_nic">NIC Number</span>
        <input className='unic_input' name="NIC_No" onChange={handleInputChange} type='text' placeholder='Enter your NIC'  required></input>

        <span className="user_email">Email Address</span>
        <input className='uemail_input' name="Email" onChange={handleInputChange} type='email' placeholder='Enter your Email'  required></input>

        <span className="user_password">Password</span>
        <input className='upass_input' name="Password" onChange={handleInputChange} type='password' placeholder='Enter a Password' required></input>

        <button className="signup_but" type="submit" onClick={handleSubmit}>SIGN UP</button>

      </div>
    </form>
    <button className="login2">LOGIN</button>
   <Link to="/Loginpage">
          <button className="login2">LOGIN</button>
            </Link>
    <span className="headsignup">Sign Up</span>
    <span className="log">Already have an account?</span>
    </>
  );
}

export default RegistrationForm;
