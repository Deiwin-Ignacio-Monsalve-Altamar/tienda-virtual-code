import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Categories from './Categories';
import MultiCarouselPage from './MultiCarouselPage';

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    <Search />
    <Categories />
        {children}
    <MultiCarouselPage />
    <Footer />
  </div>
);

export default Layout;