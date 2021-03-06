import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import reducer from './reducers';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

const initialState = {
  "Myshop": [],
  "user": {},
  "women": [
      {
        "id": 1,
        "title": "Pants Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1500,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 2,
        "title": "Shirt Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 13000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 3,
        "title": "Dress red",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 100,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 4,
        "title": "React Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 5,
        "title": "Shops Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 50000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 6,
        "title": "Shirkt rosa",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 69800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 7,
        "title": "Caiz true",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 78933,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 8,
        "title": "121212 Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 9000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ],
  "men": [
      {
        "id": 1,
        "title": "Pants Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1500,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 2,
        "title": "Shirt Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 13000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 3,
        "title": "Dress red",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 100,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 4,
        "title": "React Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 5,
        "title": "Shops Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 50000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 6,
        "title": "Shirkt rosa",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 69800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 7,
        "title": "Caiz true",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 78933,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 8,
        "title": "121212 Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 9000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ],
  "children":[
      {
        "id": 1,
        "title": "Pants Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1500,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 2,
        "title": "Shirt Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 13000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 3,
        "title": "Dress red",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 100,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 4,
        "title": "React Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 5,
        "title": "Shops Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 50000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 6,
        "title": "Shirkt rosa",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 69800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 7,
        "title": "Caiz true",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 78933,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 8,
        "title": "121212 Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 9000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ],
  "babys":[ 
      {
        "id": 1,
        "title": "Pants Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1500,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 2,
        "title": "Shirt Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 13000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 3,
        "title": "Dress red",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 100,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 4,
        "title": "React Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 1800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 5,
        "title": "Shops Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 50000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 6,
        "title": "Shirkt rosa",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 69800,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 7,
        "title": "Caiz true",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 78933,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 8,
        "title": "121212 Blue",
        "img": "https://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "price": 9000,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ]
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


