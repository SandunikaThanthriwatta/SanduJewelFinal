import React from 'react'
import './navbar.css'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';



// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div > 
 <button className="home">HOME</button>
   <button className="jewellery">JEWELLERY</button>
   <button className="login">LOGIN</button>
   <button className="signup">SIGNUP</button>
 
            <Link to="/Homepage">
              <button className="home">HOME</button>
            </Link>
       
            <Link to="/Signup">
          <button className="signup">SIGNUP</button>
            </Link>
            <Link to="/Loginpage">
          <button className="login">LOGIN</button>
            </Link>
            <Link to="/Jewellery">
            <button className="jewellery">JEWELLERY</button>
            </Link>
        
    </div>
  )
}

