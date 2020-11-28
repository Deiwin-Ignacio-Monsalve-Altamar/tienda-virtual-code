import React from 'react';
import { connect } from "react-redux";
import Carousel from '../components/Carousel';
import MultiCarouselPage from '../components/MultiCarouselPage';
import Search from "../components/Search";
import Categories from "../components//Categories";


const Home = ({myShop}) =>{

    return (
        <>
            <Search shop={myShop} />
            <Categories />
            <Carousel isHome={true}/>
            <MultiCarouselPage />
        </>
    )
}

const mapStateToProps = state => {
    return {
      myShop: state.myShop,
    };
  };
export default connect(mapStateToProps, null)(Home);
