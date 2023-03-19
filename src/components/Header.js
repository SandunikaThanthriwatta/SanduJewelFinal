import React from 'react'
import './headerrectangle.css'
import Logo from '../assests/Logo.png'

export default function Header() {
  return (
    <div className="headerrectangle">
   <img src={Logo} alt="" className="logo" />
   
    </div>
  )
}
