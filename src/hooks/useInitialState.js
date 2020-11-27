import React, { useState, useEffect } from 'react';

import axios from 'axios';

const useInitialState = (API) => {
  const [ clothes, setclothes ] = useState([]);
  useEffect(() => {
    axios.get(API)
        .then(res => {
            const clothes = res.data;
            console.log(clothes)
            setclothes({clothes})
        })
  }, []);
  return clothes;
};

export default useInitialState;