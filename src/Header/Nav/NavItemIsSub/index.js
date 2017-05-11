import React from 'react';
import NavItem from '../NavItem'
import './styles.css'

export default (props) => {
  const {isActive=false, url, name} = props;
  return (
      <div className="has-submenu">
          <NavItem isActive={isActive} url={url} name={name} />
      </div>
  );
};
