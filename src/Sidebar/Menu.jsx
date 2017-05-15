/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const Menu = styled.nav`
  text-align: center;
`;

const MenuLink = styled(NavLink)`
  position: relative;
  display: block;
  text-transform: uppercase;
  font-family: "avenir";
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  margin-bottom: 2.42rem;
  transition: .6s;
  color: #3a3a3a;

  &:hover{
    color: #fff;

  }
  &.is-active {
    color: #ffffff;
    opacity: 1;
  }

  ${props => props.isSubNav && `
    padding-right: 2.75rem;
    display: inline-block;
    &:after {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      right: 0;
      height: 2.75rem;
      width: 2.75rem;
      background: url(${require('./icon-arrow.svg')}) center no-repeat;
    }
  `}
`;

const SubMenu = styled.nav`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 2.25rem;
  display: flex;
  flex-direction: column;
`;

const SubMenuLink = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  font-size: 3rem;
  line-height: 3.3rem;
  margin-bottom: 2.42rem;
  text-transform: uppercase;
  font-family: "andale";
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.7rem;
  color: #3a3a3a;
  ${props => props.isActive && 'color: #ffffff'}
`;

export default () => (
  <Menu>
    <MenuLink activeClassName="is-active" isSubNav to="/">Sports</MenuLink>
    <SubMenu>
      <SubMenuLink isActive to="#">Shoes</SubMenuLink>
      <SubMenuLink to="#">Clothing</SubMenuLink>
      <SubMenuLink to="#">Accesories</SubMenuLink>
    </SubMenu>
    <MenuLink to="#">Brands</MenuLink>
    <MenuLink to="#">Micoash</MenuLink>
  </Menu>
);
