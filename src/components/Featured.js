import React from 'react'
import './featured.css'
import necklace1 from '../assests/necklace1.jpg'
import necklace2 from '../assests/necklace2.jpg'
import necklace3 from '../assests/necklace3.jpg'
import necklace4 from '../assests/necklace4.jpg'
import ring from '../assests/ring.jpg'
import ring2 from '../assests/ring2.jpg'
import earing from '../assests/earing.jpg'
import earing2 from '../assests/earing2.jpg'


export default function Featured() {
  return (
    <div>
      <span className="featured">Featured Products</span>
      <img src={necklace1} alt="" className="necklace1" />
      <img src={necklace2} alt="" className="necklace2" />
      <img src={necklace3} alt="" className="necklace3" />
      <img src={necklace4} alt="" className="necklace4" />
      <img src={ring} alt="" className="ring" />
      <img src={ring2} alt="" className="ring2" />
      <img src={earing2} alt="" className="earing2" />
      <img src={earing} alt="" className="earing" />
    
      
    </div>
  )
}
