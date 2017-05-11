import React from 'react';
import './styles.css'
import SubNavItem from './SubNavItem'

export default () => {
  return (
    <nav className="submenu">
      <SubNavItem isActive={true} url="#" name="Shoes" />
      <SubNavItem url="#" name="Clothing" />
      <SubNavItem url="#" name="Accesories" />
    </nav>
  );
};
