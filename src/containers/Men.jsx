import React from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Categories from "../components//Categories";

const Men = ({ myShop, men }) => {
  return (
    <>
      <Search shop={myShop} />
      <Categories />
      {men ? (
        <Carousel list={men} />
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    myShop: state.myShop,
    men: state.men,
  };
};

export default connect(mapStateToProps, null)(Men);
