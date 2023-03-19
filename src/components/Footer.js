
import React from 'react'
import './footer.css'
import logos from '../assests/logos.png' 
import './rectangle.css'

export default function Footer(props) {
    const { position } = props;
  return (
    <div className="rectangle">
      <div className="footer-container" style={{ top: position }}></div>
      
<span className="name">Sandu Jewellers (pvt) LTD</span>
<span className="address">32,Colombo Road,Kandy</span>
<span className="pnum1">+94 537 874 738</span>
<span className="pnum2">+94 578 945 776</span>
<span className="email">SanduJewellers@gmail.com</span>
<span className="headoffice">Head Office</span>
<span className="mon-sat">Monday-Saturday</span>
<span className="sun">Sunday</span>
<span className="mon-sat-time">10.00 am-6.00 pm</span>
<span className="sun-time">closed</span>
<span className="branches">Branches</span>
<span className="b-mon-sat">Monday-Saturday</span>
<span className="b-sun">Sunday</span>
<span className="b-mon-sat-time">10.00 am-6.00 pm</span>
<span className="b-sun-time">closed</span>
<img src={logos} alt="logos" className="logos" />

    </div>
  )
}
