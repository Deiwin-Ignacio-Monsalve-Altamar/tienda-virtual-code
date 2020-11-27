import React from 'react';
import { Card, Button } from "react-bootstrap";

import '../assets/styles/components/Carousel.css';
import '../assets/styles/components/CarouselItem.css';
import Promo from '../assets/static/promociones.jpg';
import Adidas from '../assets/static/adidas.png';
import Ofertas from '../assets/static/ofertas.png'
import CarouselItem from './CarouselItem'

const Carousel = ({isHome, list}) => {

  return isHome ?
        <section className="carousel">
          <article className="carousel__main">
              <Card style={{ width: "100%", height: "46rem" }}>
              <Card.Img style={{ width: "100%", height: "43rem" }} variant="top" src={Ofertas}/>
              <Card.Body className="Product-Card-Body">
                <Card.Title>"Sencilla"</Card.Title>
                <Card.Text className="Price-Text">{`$100`}</Card.Text>
                <Button
                  variant="primary"
                  className="Buy-Button"
                  /* onClick={() => {
                    setProductSelected();
                    setSelect(true);
                  }} */
                >
                  Select
                </Button>
              {/*  {select ? ( */}
              {/*           <Link to="/Product">
                    <Button variant="primary" className="Buy-Button">
                      Buy now
                    </Button>
                  </Link>
                ) : ( */}
                  <Button variant="primary" disabled>Buy now</Button>
                {/* )} */}
              </Card.Body>
              </Card>
          </article>
          <article className="carousel__second">
            <aside >
            <Card style={{ width: "100%", height: "23rem" }}>
              <Card.Img  style={{ width: "100%", height: "14rem" }} variant="top" src={Adidas}/>
              <Card.Body className="Product-Card-Body">
                <Card.Title>"Sencilla"</Card.Title>
                <Card.Text className="Price-Text">{`$100`}</Card.Text>
                <Button
                  variant="primary"
                  className="Buy-Button"
                >
                  Select
                </Button>
                  <Button variant="primary" disabled>Buy now</Button>
            
              </Card.Body>
              </Card>
            </aside>
            <aside >
            <Card style={{ width: "100%", height: "23rem" }}>
              <Card.Img style={{ width: "100%", height: "19rem" }} variant="top" src={Promo}/>
              <Card.Body className="Product-Card-Body">
                <Card.Title>"Sencilla"</Card.Title>
                <Card.Text className="Price-Text">{`$100`}</Card.Text>
                <Button
                  variant="primary"
                  className="Buy-Button"
                >
                  Select
                </Button>
                  <Button variant="primary" disabled>Buy now</Button>
            
              </Card.Body>
              </Card>
            </aside>
          </article>
        </section>
        :  <div className="List-Products-Container"> {list.map((item, i) => <CarouselItem product={item}/>)}</div>
};

export default Carousel;
