import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from "react-bootstrap";
import Carousel from '../components/Carousel';
import Search from "../components/Search";
import Categories from "../components//Categories";


const Women = ({ myShop, women }) =>{


    return (
        <>
        <Search shop={myShop} />
        <Categories />
        {women ?  <Carousel list={women}/>
            : <Spinner animation="border" variant="secondary" /> 
        }
        </>
    ) 
}

const mapStateToProps = state => {
    return {
      myShop: state.myShop,
      women: state.women
    };
  };
  
export default connect(mapStateToProps, null)(Women);