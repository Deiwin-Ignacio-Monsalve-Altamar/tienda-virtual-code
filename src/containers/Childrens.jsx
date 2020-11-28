import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from "react-bootstrap";
import Carousel from '../components/Carousel';
import Search from "../components/Search";
import Categories from "../components//Categories";

const Childrens = ({ myShop, children}) =>{

    return (
        <>
      <Search shop={myShop} />
      <Categories />
        {children ?  <Carousel list={children}/>
            : <Spinner animation="border" variant="secondary" /> 
        }
        </>
    ) 
}

const mapStateToProps = state => {
    return {
      myShop: state.myShop,
      children: state.children
    };
  };
  
export default connect(mapStateToProps, null)(Childrens);