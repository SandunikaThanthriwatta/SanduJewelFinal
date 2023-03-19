import React from 'react'

import Footer from '../components/Footer.js'
import './signup.css'
import Signup from '../components/Signup.js'
import Header from '../components/Header.js'


export default function Loginpage() {
  return (
    <div className="page-container">
      
       <Signup/>
       <Header/>
       <Footer position="100px"/>
    </div>
  )
}
