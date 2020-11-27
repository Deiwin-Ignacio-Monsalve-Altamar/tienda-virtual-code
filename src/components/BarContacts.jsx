import React from 'react';
import { Link } from 'react-router-dom';

import phone from '../assets/static/phone.png';
import '../assets/styles/components/BarContact.css'


const BarContacts = () => (
    <div className="bar-contacts">
        <div className="phone">
              <img src={phone} alt="Number phone"/>
              <h2>0383 993 91392 939</h2>  
        </div>
        <ul className="contact">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/contact">CONTACTANOS</Link></li>
            <li>PAIS</li>
            <li><Link to="/login">SIGN IN</Link></li>
        </ul>
    </div>
  );
  
  export default BarContacts;