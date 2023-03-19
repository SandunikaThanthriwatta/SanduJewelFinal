import React from 'react'

import Navbar from '../components/Navbar.js'

import girlwithjewellery from '../assests/girlwithjewellery.webp'
import Rectangle2 from '../components/Rectangle2.js'
import Featured from '../components/Featured.js'
import Chaintypenecklace from '../components/Chaintypenecklace.js'
import Footer from '../components/Footer.js'
import './homepage.css'
import Quote from '../components/Quote.js'
import Header from '../components/Header.js'


export default function homepage() {
  return (

    <div>
      <Header/>
    
    <Navbar/>
    <img src={girlwithjewellery} alt="" className="girlwithjewellery" />
    <Chaintypenecklace/>
    <Rectangle2/>
    <Featured/>
   
<Quote/>
    <Footer/>
    </div>
  )
}

