import React from 'react';

import logo from '../assets/static/dima.png';
import pay from '../assets/static/compras.png'
import '../assets/styles/components/Search.css';

const Search = () => (
  <section>
      <ul className="search">
        <li className="search__logo">
            <img src={logo} alt="logo de la empresa"/>
        </li>

        <li className="search__input">
            <input type="text" placeholder="¿Qué quieres comprar hoy?" />
        </li>

        <li className="car__shop">
            <div className="save_products"> 
                <ul>
                    <li>
                        <img src={pay} alt=""/>
                    </li>
                    <li>
                        Products
                    </li>

                    <li>
                        0
                    </li>
                </ul>
                
                </div>
        </li>

      </ul>
  </section>
);

export default Search;
