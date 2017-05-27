import React from 'react';
import Nav from './Nav';
import Link from './Link';

export default () => (
  <div>
    <Nav title="Football">
      <Link to="/products/football/shoes">Shoes</Link>
      <Link to="/products/football/clothing">Clothing</Link>
      <Link to="/products/football/accesories">Accesories</Link>
    </Nav>
    <Nav title="Running">
      <Link to="/products/running/shoes">Shoes</Link>
      <Link to="/products/running/clothing">Clothing</Link>
      <Link to="/products/running/accesories">Accesories</Link>
    </Nav>
    <Nav title="Basketball">
      <Link to="/products/basketball/shoes">Shoes</Link>
      <Link to="/products/basketball/clothing">Clothing</Link>
      <Link to="/products/basketball/accesories">Accesories</Link>
    </Nav>
  </div>
);
