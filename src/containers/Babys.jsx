import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from "react-bootstrap";
import Carousel from '../components/Carousel';
import Search from "../components/Search";
import Categories from "../components//Categories";

const Babys = ({ myShop, babys }) =>{
    
    return (
        <>
        <Search shop={myShop} />
        <Categories />
        {babys ?  <Carousel list={babys}/>
            : <Spinner animation="border" variant="secondary" /> 
        }
        </>
    ) 
}

const mapStateToProps = state => {
    return {
      myShop: state.myShop,
      babys: state.babys
    };
  };
  
export default connect(mapStateToProps, null)(Babys);