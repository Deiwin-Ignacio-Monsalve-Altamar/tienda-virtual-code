import React from 'react';
import Carousel from '../components/Carousel';
import useInitialState from '../hooks/useInitialState';

const API = 'http://127.0.0.1:3000/initialState/'


const Home = () =>{

    const initialState = useInitialState(API);
    console.log(initialState)
    
    return (
        <>
            <Carousel isHome={true}/>
        </>
    )
}

export default Home;