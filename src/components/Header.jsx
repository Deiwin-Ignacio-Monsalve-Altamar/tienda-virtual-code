import React from 'react';

import BarContact from './BarContacts';

import '../assets/styles/components/Header.css';
/* import userIcon from '../assets/static/user-icon.png'; */
import portada from '../assets/static/caras.png'

const Header = () => (
    <header>
        <div className="img-portada">
            <img src={portada} alt="imagen de portada descuento"/>
            <div className="text">SALE 70% OF ALL PRODUCTS</div>
            <button>GET SAVINGS NOW</button>
        </div>

        <BarContact />
    </header>
);

export default Header;