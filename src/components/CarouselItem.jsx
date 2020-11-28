import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addToCar } from "../actions";

import "../assets/styles/components/CarouselItem.css";

const CarouselItem = props => {
  const { img, description, price, id } = props;

  const handleAddToCar = () => {
    props.addToCar({
      img, description, price, id
     })
  }

  return (
    <Card style={{ width: "18rem" }} className="Product-Card">
      <Card.Img variant="top" src={img} />
      <Card.Body className="Product-Card-Body">
        <Card.Title>{description}</Card.Title>
        <Card.Text className="Price-Text">{`$${price}`}</Card.Text>
        <div className="Buttons">
          <Button
            variant="primary"
            className="Buy-Button"
            onClick={() => handleAddToCar}
          >
            Add to Car
          </Button>
          {/*  {select ? (
              <Link to="/Product">
                <Button variant="primary" className="Buy-Button">
                  Buy now
                </Button>
              </Link>
            ) : ( */}
          <Button variant="primary" disabled>
            Buy now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = {
  addToCar,
}

export default connect(null, mapDispatchToProps)(CarouselItem);
