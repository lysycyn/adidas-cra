import React from 'react';
import './styles.css'

export default (props) => {
  const {isActive = false, url, name} = props;
  return (
        <a className={`submenu__item ${isActive ? "submenu__item_active": ""}`} href={url}>{name}</a>
  );
};
