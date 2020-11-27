import React from 'react';
import '../assets/styles/components/Categories.css';
import Nav from 'react-bootstrap/Nav';

const Categories = () => (
  <section className="categories">

      <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/men">MEN</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/women">WOMEN</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/childrens">CHILDRENS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/babys">BABYS</Nav.Link>
      </Nav.Item>
    </Nav>
  </section>
);

export default Categories;