import React from 'react';

import { Spinner } from "react-bootstrap";
import Carousel from '../components/Carousel';
import MultiCarouselPage from '../components/MultiCarouselPage';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/data/'

const Men = () =>{

    const initialState = useInitialState(API);
    console.log(initialState.clothes)


    return (
        <>
        {initialState.clothes ?  <Carousel list={initialState.clothes.men}/>
            : <Spinner animation="border" variant="secondary" /> 
        }
        </>
    ) 
}

export default Men;