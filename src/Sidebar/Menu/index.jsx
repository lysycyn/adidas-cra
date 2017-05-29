import React from 'react';
import Nav from './Nav';
import Link from './Link';

const LinkWithActive = ({ to, children }) =>
  <Link activeClassName="is-active" to={to}>{children}</Link>;

export default () => (
  <div>
    <Nav title="Football">
      <LinkWithActive to="/products/football/shoes">Shoes</LinkWithActive>
      <LinkWithActive to="/products/football/clothing">Clothing</LinkWithActive>
      <LinkWithActive to="/products/football/accesories">Accesories</LinkWithActive>
    </Nav>
    <Nav title="Running">
      <LinkWithActive to="/products/running/shoes">Shoes</LinkWithActive>
      <LinkWithActive to="/products/running/clothing">Clothing</LinkWithActive>
      <LinkWithActive to="/products/running/accesories">Accesories</LinkWithActive>
    </Nav>
    <Nav title="Basketball">
      <LinkWithActive to="/products/basketball/shoes">Shoes</LinkWithActive>
      <LinkWithActive to="/products/basketball/clothing">Clothing</LinkWithActive>
      <LinkWithActive to="/products/basketball/accesories">Accesories</LinkWithActive>
    </Nav>
  </div>
);
