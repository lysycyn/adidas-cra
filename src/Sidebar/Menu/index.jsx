import React from 'react';
import Nav from './Nav';
import Link from './Link';

const LinkWithActive = ({ to, children }) => (
  <Link activeClassName="is-active" to={to}>{children}</Link>
);

export default () => (
  <div>
    <Nav title="Football">
      <LinkWithActive to="/products/football/apparel">Apparel</LinkWithActive>
      <LinkWithActive to="/products/football/cleats">Cleats</LinkWithActive>
      <LinkWithActive to="/products/football/accessories">Accesories</LinkWithActive>
    </Nav>
    <Nav title="Running">
      <LinkWithActive to="/products/running/shoes">Shoes</LinkWithActive>
      <LinkWithActive to="/products/running/apparel">Apparel</LinkWithActive>
      <LinkWithActive to="/products/running/accessories">Accesories</LinkWithActive>
    </Nav>
    <Nav title="Basketball">
      <LinkWithActive to="/products/basketball/shoes">Shoes</LinkWithActive>
      <LinkWithActive to="/products/basketball/apparel">Apperal</LinkWithActive>
      <LinkWithActive to="/products/basketball/accessories">Accesories</LinkWithActive>
    </Nav>
  </div>
);
