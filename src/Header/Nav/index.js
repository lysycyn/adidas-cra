import React from 'react';
import NavItem from './NavItem'
import NavItemIsSub from './NavItemIsSub'
import SubNav from './SubNav'
import './styles.css'

export default () => {
  return (
    <nav className="menu">
      <NavItemIsSub isActive={true} url="#" name="Sports" />
      <SubNav />
      <NavItem url="#" name="Brands" />
      <NavItem url="#" name="Micoash" />
    </nav>
  );
};
