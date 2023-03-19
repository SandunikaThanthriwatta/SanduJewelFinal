import React from 'react'

import Footer from '../components/Footer.js'
import './loginpage.css'
import Login from '../components/Login.js'
import Header from '../components/Header.js'


export default function Loginpage() {
  return (
    <div className="page-container">
       
       <Login/>
       <Header/>
       <Footer position="100px"/>
    </div>
  )
}
