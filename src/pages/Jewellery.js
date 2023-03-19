import React from 'react'
import Logo from '../assests/Logo.png'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import './jewellery.css'
import Jewellery from '../components/Jewellery.js'
import Jewellerydec from '../components/Jewellerydec.js'
import Header from '../components/Header.js'

export default function Exclusive() {
  return (
    <div>
      <Header/>
      <img src={Logo} alt="" className="logo" />
    <Navbar/>
    <Jewellery/>
    <Jewellerydec/>
    <Footer/>
    </div>
  )
}
