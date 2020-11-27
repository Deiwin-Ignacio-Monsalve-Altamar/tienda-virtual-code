import React from "react";
import Carousel from "react-bootstrap/Carousel";

import '../assets/styles/components/MoreDestac.css';
import Promo from '../assets/static/promociones.jpg';
import Adidas from '../assets/static/adidas.png';
import Ofertas from '../assets/static/ofertas.png'

const MultiCarouselPage = () => {
  return (
    <div>
      <div className="container-fluid">
      </div>

      <div className="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}>
          <div className="col-sm-12 destac btn btn-warning">
            Ropa mas destacada
          </div>
        </div>
        <Carousel>
          <Carousel.Item style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src={Promo}
              alt="Primera foto"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src={Ofertas}
              alt="Segunda foto"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src={Adidas}
              alt="tercera foto"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MultiCarouselPage;
