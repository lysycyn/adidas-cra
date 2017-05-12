import React from "react"
import { Nav, NavLink, SubNav, SubNavLink } from "./styled"

export default () => {
  return (
    <Nav>
      <NavLink isActive isSubNav to="#">Sports</NavLink>
      <SubNav>
        <SubNavLink isActive to="#">Shoes</SubNavLink>
        <SubNavLink to="#">Clothing</SubNavLink>
        <SubNavLink to="#">Accesories</SubNavLink>
      </SubNav>
      <NavLink to="#">Brands</NavLink>
      <NavLink to="#">Micoash</NavLink>
    </Nav>
  )
}
