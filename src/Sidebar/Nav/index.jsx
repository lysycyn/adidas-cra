import React from 'react';
import { Nav, NavLinkItem, SubNav, SubNavLink } from './styled';

export default () => (
  <Nav>
    <NavLinkItem activeClassName="is-active" isSubNav to="/">Sports</NavLinkItem>
    <SubNav>
      <SubNavLink isActive to="#">Shoes</SubNavLink>
      <SubNavLink to="#">Clothing</SubNavLink>
      <SubNavLink to="#">Accesories</SubNavLink>
    </SubNav>
    <NavLinkItem to="#">Brands</NavLinkItem>
    <NavLinkItem to="#">Micoash</NavLinkItem>
  </Nav>
);
