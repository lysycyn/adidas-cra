import React from 'react';
import Nav from './Nav';
import Link from './Link';

export default () => (
  <div>
    <Nav title="Football">
      <Link activeClassName="is-active" to="/products/football/shoes">Shoes</Link>
      <Link activeClassName="is-active" to="/products/football/clothing">Clothing</Link>
      <Link activeClassName="is-active" to="/products/football/accesories">Accesories</Link>
    </Nav>
    <Nav title="Running">
      <Link activeClassName="is-active" to="/products/running/shoes">Shoes</Link>
      <Link activeClassName="is-active" to="/products/running/clothing">Clothing</Link>
      <Link activeClassName="is-active" to="/products/running/accesories">Accesories</Link>
    </Nav>
    <Nav title="Basketball">
      <Link activeClassName="is-active" to="/products/basketball/shoes">Shoes</Link>
      <Link activeClassName="is-active" to="/products/basketball/clothing">Clothing</Link>
      <Link activeClassName="is-active" to="/products/basketball/accesories">Accesories</Link>
    </Nav>
  </div>
);
