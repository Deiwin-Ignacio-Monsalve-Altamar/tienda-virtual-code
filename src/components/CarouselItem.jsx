import React from 'react';
import { Card, Button } from "react-bootstrap";

import '../assets/styles/components/CarouselItem.css';


const CarouselItem = ({product}) =>{

    const { img, description, price, id } = product;
    return (
        <Card style={{ width: "18rem" }} className="Product-Card">
        <Card.Img variant="top" src={img} />
        <Card.Body className="Product-Card-Body">
          <Card.Title>{description}</Card.Title>
          <Card.Text className="Price-Text">{`$${price}`}</Card.Text>
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
         {/*  {select ? (
            <Link to="/Product">
              <Button variant="primary" className="Buy-Button">
                Buy now
              </Button>
            </Link>
          ) : ( */}
            <Button variant="primary" disabled>Buy now</Button>
        </Card.Body>
      </Card>
    )
}

export default CarouselItem;